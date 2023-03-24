import { useState } from "react";
import LeftPanel from "../analyzer2/leftpanel";
import MidPanel from "../analyzer2/midpanel";
import RightPanel from "../analyzer2/rightpanel";

export default function Render() {
  const [dataToBeDisplayedOnChart, setDataToBeDisplayedOnChart] = useState();

  return (
    <div className="row border border-4">
      <div className="col-2 border-end border-4">
        <LeftPanel setChartData={setDataToBeDisplayedOnChart}></LeftPanel>
      </div>
      <div className="col-8 border-end border-4">
        <MidPanel showChartData={dataToBeDisplayedOnChart}></MidPanel>
      </div>
      <div className="col-2">
        <RightPanel></RightPanel>
      </div>
    </div>
  );
}
