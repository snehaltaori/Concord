import TimeDirector from "./utils/TimeDirector";
import DeleteIcon from "@mui/icons-material/Delete";
import GetCurrentTime from "./utils/GetCurrentTime";
import { useAuth } from "../../security/AuthContext";

export default function Box({ boxData, deleteData }) {
  const size = 0.6; // .75 original
  const boxStyle = {
    // margin: "2rem 5rem",
    // width: `${size * 40}%`,
    // width: `40rem`,
    // maxWidth: `auto`,
    // maxWidth: `${size * 40}%`,

    // height: `${size * 40}%`,
    backgroundColor: `#dae7fd`,
    borderRadius: `${size * 0.8}rem`,
    padding: `${size * 1}rem ${size * 1.5}rem`,
    borderLeft: `${size * 12}px solid #4c8aff`,
    // boxShadow: `0 0 3px #00000030`,
  };
  const boxColorUpcoming = {
    backgroundColor: `#FFEADC`,
    borderLeft: `${size * 12}px solid #ee9239`,
  };
  const boxColorLive = {
    backgroundColor: `#FFE2E2`,
    borderLeft: `${size * 12}px solid #f55d5d`,
  };
  const boxColorCompleted = {
    backgroundColor: `#DCEFFF `,
    borderLeft: `${size * 12}px solid #4c8aff`,
  };
  const titleStyle = {
    // marginBottom: `${size * 0.7}rem`,
    fontSize: `${size * 1.5}rem`,
    fontWeight: `700`,
    letterSpacing: `${size * 0.6}px`,
    color: `#5e5e5e`,
  };

  const boxBodyStyle = {
    fontSize: `${size * 1.3}rem`,
    fontWeight: `500`,
    // marginBottom: `${size * 0.7}rem`,
  };

  const fromAndToStyle = {
    fontWeight: `700`,
    fontSize: `${size * 1.3}rem`,
  };

  const delete_todo = {
    fontWeight: `600`,
    fontSize: `${size * 1.3}rem`,
    position: "relative",
    float: "right",
    cursor: "pointer",
  };

  let curTime = GetCurrentTime()
    .split(":")
    .map((el, i) => {
      if (el.length === 1) return "0" + el;
      else return el;
    })
    .join(":");
  // console.log(curTime);
  let box_class = "completed";
  function timeCheck() {
    let arrThree = [boxData.timeStart, boxData.timeEnd, curTime];
    // console.log(arrThree);
    arrThree = arrThree.sort();

    // console.log(arrThree);

    if (arrThree.indexOf(curTime) === 0) {
      box_class = "upcoming";
      return boxColorUpcoming;
    } else if (arrThree.indexOf(curTime) === 1) {
      box_class = "live";
      return boxColorLive;
    } else {
      return boxColorCompleted;
    }
  }

  // const deleteData2 = deleteData(boxData.id);
  const authContext = useAuth();
  const role = authContext.getRoles();
  const allowedRoles = ["ROLE_ADMIN", "ROLE_FACULTY"];

  return (
    <div
      className={`cal_box drop-in text-left overflow-hidden mr-8 w-[35vw] ${box_class}`}
      style={{ ...boxStyle, ...timeCheck() }}
    >
      <div className="title font-bold" style={titleStyle}>
        {boxData.title}
      </div>
      <div className="box-body text-[#707070]" style={boxBodyStyle}>
        {boxData.body}
      </div>
      <div className="from-and-to text-[#707070]" style={fromAndToStyle}>
        {TimeDirector(boxData.timeStart)} - {TimeDirector(boxData.timeEnd)}
        <div
          className="delete-event"
          style={delete_todo}
          onClick={() => deleteData(boxData.eventId)}
        >
          {allowedRoles.some((allowedRole) => role.includes(allowedRole)) ? (
            <DeleteIcon color="#707070" fontSize="inherit" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
