//Q-1:-ANSWER
function add(){
    var A=10;
    var B=20;
    var Result=A+B;
    console.log("Result=",Result);
}
add();

//Q-2:- ANSWER
function Sum(a,b){
    var Sum=a+b;
    console.log("Sum=",Sum);
}
Sum(3,4);

//Q-3:-ANSWER
var function1=()=>{
    console.log("Hello NIYAZ");
};
function1();


//Q-4:-ANSWER
var x=21;
var girl=function(){
    console.log(x);
    var x=20;
};
girl();


//Q-5:-ANSWER

var x=21;
girl();
console.log(x);
    function girl(){
      console.log(x);
      var x=20;
};


//Q-6:-ANSWER

var x=21;
a();
b();

function a(){
    x=20;
    console.log(x);
};
function b(){
    x=40;
    console.log(x);
};

//Q-7:-ANSWER

function factorial(n){
    if(n===0 || n===1)
    {
        return 1;
    }
    else
    {
        return n*factorial(n-1);
    }
}

//DAY-2 ANSWER-1

function FindSum(a,b)
{
    return a+b;
}
function DisplayData(data,batch){
    console.log(`i am from ${data} and My batch is EA${batch}`);
}
DisplayData("PrepBytes",FindSum(10,9));

//DAY-2 ANSWER

// Abc();
// const Abc=function(){
//     let Value=20;
//     console.log(Value);
// }

//DAY-2 ANSWER

var a=10;
(function (){
    console.log(a);
    var a=20;
})();

//DAY0-2 ANSWER

const greet=function(name){
    return function(m){
        console.log(`Hi !! ${name},${m}`);
    }
}
const greet_message=greet("EA19");
greet_message("Welcome To PrepBytes");