var x=100; //global
function varDemo(){
    console.log("x ben trong ham:",x);
}
//
console.log("x bên ngoai ham:",x);
// thực thi ham;
varDemo();

//local
function fn_demo(){
    var y=200; //local
    console.log("y bên trong hàm",y);
}
fn_demo();
// y bên ngoài hàm
console.log("y bên ngoài hàm",y); // ==error ReferenceError: y is not defined
// ví dụ : chatgpt / deepseek