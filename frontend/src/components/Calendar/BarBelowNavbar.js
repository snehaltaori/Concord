import AddEventModal from "./AddEventModal";
import BasicDatePicker from "./DatePicker";
import Dropdown from "./Dropdown";
import SortByLife from "./SortByLife";

export default function BarBelowNavbar({
  data,
  setData,
  updateData,
  tabHandler,
  semesters,
  currentSemester,
  setCurrentSemester,
}) {
  return (
    <div className="barBelowNavbar fade-in">
      {/* <BasicDatePicker></BasicDatePicker> */}

      <div className="left flex justify-center items-center space-x-6">
        <SortByLife tabHandler={tabHandler}></SortByLife>
        <Dropdown
          controlClassName={"bg-red-100"}
          semesters={semesters}
          currentSemester={currentSemester}
          setCurrentSemester={setCurrentSemester}
        ></Dropdown>
      </div>

      <div className="right">
        <AddEventModal data={data} setData={setData} updateData={updateData} />
      </div>
    </div>
  );
}
