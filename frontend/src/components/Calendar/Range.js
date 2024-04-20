import Box from "./Box";
import TimeDirector from "./utils/TimeDirector";

export default function Range({data, deleteData}) {
    // console.log(data);
    // console.log(data.timeStart);
    
  return (
    <div className="cal_range drop-in flex items-stretch m-1.5 w-[97vw]">
      <div className="cal_range-time bg-[#e1e1e1] flex text-[.8rem] items-center whitespace-nowrap mr-7 px-3 py-1 rounded-[10%]">{(TimeDirector(data[0].timeStart))}</div>
      {data.map(boxData =><Box boxData={boxData} key={boxData.eventId} deleteData={deleteData}/> )}
    </div>
  );
}
