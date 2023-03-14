function clr1(){
    document.bgColor="red";
    setTimeout(clr2, 2000);
}
function clr2(){
    document.bgColor="yellow";
    setTimeout(clr3, 2000);
}
function clr3(){
    document.bgColor="green";
    setTimeout(clr4, 2000);
}
function clr4(){
    document.bgColor="purple";
    setTimeout(clr5, 2000);
}
function clr5(){
    document.bgColor="skyblue";
    setTimeout(clr1, 2000);
}
