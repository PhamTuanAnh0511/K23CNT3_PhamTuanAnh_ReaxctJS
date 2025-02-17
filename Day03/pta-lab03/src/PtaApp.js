import PtaClassComp from './components/PtaClassComp';
import PtaJxsExpression from './components/PtaJxsExpression';
import PtaFuncComp from './components/PtaFuncComp';

function PtaApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Day03 - Phạm Tuấn Anh</h1>


      <PtaJxsExpression />



      <hr />
      {/* sử dụng function components */}
      <PtaFuncComp></PtaFuncComp>

      {/* sử dụng class components */}
      <PtaClassComp></PtaClassComp>
    </div>
  );
}

export default PtaApp;