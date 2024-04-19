import GetCurrentTime from "./GetCurrentTime";

export default function EventStatusChecker(boxData) {
  console.log(boxData);
  let curTime = GetCurrentTime()
    .split(":")
    .map((el, i) => {
      if (el.length === 1) return "0" + el;
      else return el;
    })
    .join(":");
  // console.log(curTime);
  let box_class = "completed";
  // function timeCheck() {

  let arrThree = [boxData.timeStart, boxData.timeEnd, curTime];
  // console.log(arrThree);
  arrThree = arrThree.sort();

  // console.log(arrThree);

  if (arrThree.indexOf(curTime) === 0) {
    box_class = "upcoming";
  } else if (arrThree.indexOf(curTime) === 1) {
    box_class = "live";
  } else {
    box_class = "completed";
  }
  // console.log(box_class);
  return box_class;
  // }
  // timeCheck();
}
