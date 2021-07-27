function fn(){
    console.log("I am a function");
    return 10;
}
fn();
let rVal=fn();
console.log("rVal",rVal);

function satyam(parameter){
    // console.log("From function satyam");
    // console.log("Parameter received",parameter);        
    let ans=Math.random()>0.5?true:"Less than 0.5";
    return ans;
    
}
let rVal=satyam(10);
console.log(rVal);