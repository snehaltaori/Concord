import Range from "./Range";

export default function CalendarHandler({ data, setData, deleteData }) {
console.log("Rendering CalendarHandler");


  //   /* --------- sorting time string with AM and PM --------- */
  let timeSet = new Set(data.map((boxData) => boxData.timeStart));
  // console.log(timeSet);

  timeSet = Array.from(timeSet).sort();
  // console.log(timeSet);
  // /* ------------------------------------------------------ */

  /* -- grouping objects using timeStart in sorted order -- */
  const y2 = [];
  timeSet.forEach(function (el) {
    y2.push(
      data.filter(function (el2) {
        if (el2.timeStart === el) return el2;
      })
    );
  });
  // console.log(y2);
  /* ------------------------------------------------------ */

  return (
    <div className="calendar ">
      <div className="grid">
        {y2.map((el) => (
          <Range data={el} key={Math.random()} deleteData={deleteData}/>
        ))}
      </div>
    </div>
  );
}
