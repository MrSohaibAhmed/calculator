const button = document.querySelectorAll("#button");
const operator = document.querySelectorAll(".color");
const equals = document.querySelector(".equals");
const reset = document.querySelector("#reset");
const off=document.querySelector("#off");
// console.log(button);

var inp=document.getElementById("inp");

var output='';
button.forEach((item)=> {
    item.addEventListener("click" , function() {
        // console.log((item.innerHTML));
        inp.value=item.innerHTML;
        // output=(item.innerHTML)+(output);
        output=output + item.innerHTML;     
        inp.value=output;
        // output=parseInt(output);
         
    })
})


equals.addEventListener("click", function() {
    // show=Number(output);
    // show=parseInt(output);
    show=eval(output);
    inp.value=(show);
    console.log(show)
    console.log(typeof show);
})

reset.addEventListener("click",function(){
    inp.value="";
    // inp.value.remove();
    console.log("removed")
})


off.addEventListener("click",function(){
    console.log("off");
    inp.value="calculator is off "
   
})
// operator.forEach((opera)=>{
//     opera.addEventListener("click",()=>{
//         inp.value=opera.innerHTML+item.innerHTML; 
//     })
// })

