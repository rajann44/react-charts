import Linechart from "../funtionality/Linechart";
import ChartType from "./chartType";
import Dimensions from "./dimensions";

export default function GridRender(){
    return(<div class="container text-center">
    <div class="row">
      <div class="col border-end border-4">
        <Dimensions/>
      </div>
      <div class="col-8">
        <Linechart/>
      </div>
      <div class="col border-start border-4">
        <ChartType/>
      </div>
    </div>
  </div>);
}