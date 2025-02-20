
import PtaClassComp from "./components/PtaClassComp";
import PtaFuncComp from "./components/PtaFuncComp";
import PtaFuncCompObj from "./components/PtaFuncCompObj";



function PtaApp() {
  // Object
  const users = {
    fullName: "Quáng Xuân Thịnh",
    age:20,
    phone: "0242413542"
  }
  return (
    <div className="container border mt-3 bg-white">
        <h1 style={{textAlign:'center', color:'red', fontFamily:'initial'}}>Component, Props, State Lesson04 - Phạm Tuấn Anh</h1>

      <hr/>
      <div className="alert alert-danger">
        <PtaFuncComp name="Phạm Tuấn Anh" age="20" address="Nhà Thi Đấu Hà Đông" />
        <hr/>
        <PtaFuncComp name="Nguyễn Huy Thông*" age="20" address=" Hà Nội" />
      </div>
      <hr/>
      <div className="alert alert-info">
        <PtaFuncCompObj renderInfo={users} />
      </div>
      <hr/>
      <PtaClassComp />
      {/* Chuyển dữ liệu từ PtaApp -> xuống PtaClassComp */}
      <PtaClassComp rendername="K23CNT3" renderUsers={users} />
    </div>
  );
}

export default PtaApp;