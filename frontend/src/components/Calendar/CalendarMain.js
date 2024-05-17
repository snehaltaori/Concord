import { useState, useEffect } from "react";
import CalendarHandler from "./CalendarEventsList";
import Navbar from "./Navbar";
import "./css/Main.css";
import BarBelowNavbar from "./BarBelowNavbar";
import EventStatusChecker from "./utils/EventStatusChecker";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../security/AuthContext";

export default function CalendarMain() {
  // console.log("Rendering CalendarMain");

  const authContext = useAuth();
  /* ------------------------------------------------------ */
  const [calendarObjectData, setCalendarObjectData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/calendar/",
        {
          headers: {
            Authorization: `Bearer ${authContext.getToken()}`, // Add the Authorization header
          },
        }
      ); // MySql DB // DO NOT REMOVE THIS LINE
      // const response = await axios.get("/eventsData.json"); // .json file data for TESTING
      // console.log(response);

      setCalendarObjectData(response.data.data); // MySql DB // DO NOT REMOVE THIS LINE
      // setCalendarObjectData(response.data); // .json file data for TESTING
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  /* ------------------------------------------------------ */
  let entireData = calendarObjectData;
  const [currentSemester, setCurrentSemester] = useState("Mtech");
  let semesters = new Set(
    entireData.filter((el) => el.semester).map((el) => el.semester)
  );
  semesters = Array.from(semesters);

  // const currentSemesterData = entireData.filter((el) => el.semester === currentSemester);
  /* ------------------------------------------------------ */
  // console.log(currentSemester);
  // const initialData = entireData.filter((el) => el.semester === currentSemester);
  // const [semestersData, setSemestersData] = useState(initialData);

  // const [data, setData] = useState(initialData);

  // useEffect(() => {
  //   // Filter the entireData whenever currentSemester changes
  //   const filteredData = entireData.filter((el) => el.semester === currentSemester);
  //   setData(filteredData);
  // }, [currentSemester, calendarObjectData]); // Dependency array ensures useEffect runs when these values change
  // console.log(data);

  /* ------------------------------------------------------ */

  let [semestersData, setSemestersData] = useState(
    entireData.filter((el) => el.semester === currentSemester)
  );
  useEffect(() => {
    const filteredData = entireData.filter(
      (el) => el.semester === currentSemester
    );
    setSemestersData(filteredData);
    setData(filteredData);
  }, [currentSemester, calendarObjectData]); // Dependency array ensures useEffect runs when these values change
  console.log(currentSemester);

  const [data, setData] = useState(semestersData);

  const [searchTodo, setSearchTodo] = useState("");

  async function addData(newData) {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/calendar/",
        {
          ...newData,
        },
        {
          headers: {
            Authorization: `Bearer ${authContext.getToken()}`, // Add the Authorization header
          },
        }
      );
      toast.success("Event Added Successfully");
      setData([...data, newData]);
    } catch {
      console.log("err");
      toast.error("There was an Error !");
    }
    // console.log("Data updated");
  }

  async function deleteData(id) {
    console.log("deleting");

    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/calendar/${id}`,
        {
          headers: {
            Authorization: `Bearer ${authContext.getToken()}`, // Add the Authorization header
          },
        }
      );
      toast.success("Event Deleted Successfully");
      // const newData = data.filter((el) => el.id !== id);
      // setData(newData);
      fetchData();
    } catch (e) {
      console.log("err: " + e);
      console.log(id);

      toast.error("There was an Error !");
    }
    // console.log("Data updated");
  }

  // console.log(searchTodo);

  useEffect(() => {
    console.log("useEffect");
    if (searchTodo === "") {
      setData(semestersData);
    } else {
      const newData = semestersData.filter((el) =>
        el.title.toLowerCase().includes(searchTodo.toLowerCase())
      );
      console.log(newData);
      setData(newData);
    }
  }, [searchTodo]);

  function tabHandler(want) {
    // console.log(want, "asdas");

    if (want === "all") setData(semestersData);
    else {
      const newData = semestersData.filter(function (el) {
        // console.log(el);
        if (EventStatusChecker(el) === want) return el;
      });
      setData(newData);
    }
  }

  return (
    <>
      <div>{/* <Toaster /> */}</div>

      <Navbar
        // handleSearch={handleSearch}
        // searchTodo={searchTodo}
        setSearchTodo={setSearchTodo}
      />
      {/* <AddEventModal data={data} setData={setData} updateData={addData} /> */}
      <BarBelowNavbar
        data={data}
        setData={setData}
        updateData={addData}
        tabHandler={tabHandler}
        semesters={semesters}
        currentSemester={currentSemester}
        setCurrentSemester={setCurrentSemester}
      />
      <CalendarHandler
        data={data}
        setData={setData}
        dataSize={data.length}
        deleteData={deleteData}
      />
    </>
  );
}
