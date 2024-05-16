import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import "./css/Modal.css";
import ButtonIcon from "./utils/buttons/ButtonIcon";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   //   bgcolor: 'background.paper',
//   bgcolor: "#fff",
//   color: "#2d2a2e",
//   //   border: '2px solid #000',
//   boxShadow: 24,
//   font: "monospace",
//   fontWeight: "500",
//   letterSpacing: ".8px",
//   p: 4,
//   display: "flex",
//   // justifyContent: "center",
//   // alignItems: "center",
//   flexDirection: "column",
// };

// const stylesheet = {
//   inputBox: {
//     display: "flex",
//     alignItems: "center",
//     overflow: "hidden",
//   },
//   input: {
//     color: "#2d2a2e",
//     margin: "10px",
//     background: "#f2f2f2",
//     borderRadius: "20px",
//     border: "1px solid #27274a",
//     height: "24px",
//     fontWeight: "500",
//     paddingLeft: "10px",
//     width: "19rem",
//     marginLeft: "10px",
//     overflow: "hidden",
//   },
//   button: {
//     background: "#2cbe82",
//     color: "#fff",
//     borderRadius: "5px",
//     border: "1px solid #2cbe82",
//     height: "auto",
//     fontWeight: "500",
//     width: "auto",
//     marginLeft: "10px",
//     overflow: "hidden",
//     fontSize: "1.2rem",
//     fontFamily: "noto sans, inter, sans-serif",
//     padding: "5px 10px",
//     margin: "10px",
//   },
// };
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: 'background.paper',
  bgcolor: "#fff",
  color: "#2d2a2e",
  //   border: '2px solid #000',
  boxShadow: 24,
  font: "monospace",
  fontWeight: "500",
  letterSpacing: ".8px",
  p: 4,
  display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  flexDirection: "column",
};

const stylesheet = {
  inputBox: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  input: {
    color: "#2d2a2e",
    margin: "10px",
    background: "#f2f2f2",
    borderRadius: "20px",
    border: "1px solid #27274a",
    height: "24px",
    fontWeight: "500",
    paddingLeft: "10px",
    width: "19rem",
    marginLeft: "10px",
    overflow: "hidden",
  },
  button: {
    background: "#2cbe82",
    color: "#fff",
    borderRadius: "5px",
    border: "1px solid #2cbe82",
    height: "auto",
    fontWeight: "500",
    width: "auto",
    marginLeft: "10px",
    overflow: "hidden",
    fontSize: ".7rem",
    fontFamily: "noto sans, inter, sans-serif",
    padding: "5px 10px",
    margin: "10px",
  },
};

export default function TransitionsModal({ data, setData, updateData }) {
  console.log("Rendering AddEventModal");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data2 = data;
  /* -------------------- handle submit ------------------- */

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [semester, setSemester] = useState("");

  function changeDateFormat(date) {
    // var date = "24/09/1977";
    // var date = "2024-02-29";
    // console.log(date);

    var datearray = date.split("-");
    var newdate = datearray[2] + "/" + datearray[1] + "/" + datearray[0];
    return newdate;
  }

  function handleSubmit() {
    // e.preventDefault();
    console.log("submitted");

    document.querySelector(".inputItem").blur();
    document.querySelectorAll(".inputItem").forEach((input) => {
      input.value = "";
    });

      const dateDDMMYYYY = changeDateFormat(date);
      // console.log(dateDDMMYYYY);

      // console.log(title);
      const dataSize = data.length;

      const newData = {
        id: dataSize + 1,
        title: title,
        body: description,
        semester: semester,
        timeStart: from,
        timeEnd: to,
        dateDue: dateDDMMYYYY,
      };

      updateData(newData);

      // setData(data2);
      // console.log(data);
      console.log(date);
  }

  /* ------------------------------------------------------ */

  return (
    <div>
      {/* <Button onClick={handleOpen} className="button ">
        &#43; Add Events
      </Button> */}
      {/* <ButtonGreen text={"Add Event"} margin={2} onClick={handleOpen}></ButtonGreen> */}
      <ButtonIcon
        text={"Add Event"}
        margin={2}
        onClick={handleOpen}
      ></ButtonIcon>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form action="" onSubmit={() => handleSubmit()}>
              <div style={stylesheet.inputBox}>
                Title:
                <input
                  className="inputItem"
                  type="text"
                  placeholder="Title"
                  required
                  style={stylesheet.input}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                Description:
                <input
                  className="inputItem"
                  type="text"
                  placeholder="text"
                  style={stylesheet.input}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={stylesheet.inputBox}>
                  From:
                  <input
                    className="inputItem"
                    type="text"
                    placeholder="text"
                    style={stylesheet.input}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>
                <div style={stylesheet.inputBox}>
                  To:
                  <input
                    className="inputItem"
                    type="text"
                    placeholder="text"
                    style={stylesheet.input}
                    onChange={(e) => setTo(e.target.value)}
                  />
                </div>
              </div>
              <div style={stylesheet.inputBox}>
                Sem:
                <input
                  className="inputItem"
                  type="text"
                  placeholder="text"
                  style={stylesheet.input}
                  onChange={(e) => setSemester(e.target.value)}
                />
              </div>
              <div style={stylesheet.inputBox}>
                Date:{" "}
                <input
                  className="inputItem"
                  type="date"
                  id="date"
                  style={stylesheet.input}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Save Event"
                style={stylesheet.button}
              />
            </form>
            {/* <DatePicker /> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
