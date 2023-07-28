



// let day=prompt("ENTER DAY")
// switch(day){ 
//     case'monday':
//     console.log('Today is Monday');
//     break ;
//     case'tuesday':
//     console.log('Today is Tuesday');
//     break;
//     case'wednesday':
//     console.log('Today is Wednesday');
//     break;
//     case'thursday':
//     console.log('Today is Thursday');
//     break;
//     case'friday':
//     console.log('Today is Friday');
//     break;
//     case'saturday':
//     console.log('Today is Saturday');
//     break;
//     default:
//         console.log('Today is Sunday');
// }




                                // loops------------------------------

                                // task 1

// for(i=0;i<=10;i=i+1){
//     document.write(i+ "<br>")
// }


                                //  task 2
// for(i=0;i<=20;i=i+2){
//     document.write(i+ "<br>")
// }


                            // task 3


// let x=Number(prompt("ENTER THE NUMBER"));
// for(i=1;i<=10;i++){
//     document.write(x + "*" + i+  "=" +i*x + "<br>" )
// }


//task 4
// let sum=0;
// let prefect=[2,3,4,5,6,7,8,9,10];
// for(i=0;i<prefect.length;i++){

//     // console.log(prefect[i]);
//      sum=sum+prefect[i];
     
// }

// document.write(sum);

//task 5 
// let input=prompt("ENTER A NUMBER WHICH IS NOT NEGATIVE NUMBER");
// if(input>=0){
//     console.log("U HAVE ENTERD A GOOD NUMBER")
// }else{
//     console.log("U HAVE ENTERD A BAD NUMBER");
// }


// let arr=[23,45,67,89,01,22,00,93];
// let sum=0;
// for(1=0; i<arr.length; i++){
//     sum = sum+arr[i]; 
// }

// let temp_celsius=Number(prompt("enter temperature in celsius"));
// let convert=((temp_celsius)*(9/5))+32;
// console.log("temperature in farenheit is" + convert);










// Objects
// const fullName = "Hello";

// const obj = {
//     name:"Abdullah",
//     classs:"Web",
//     age:20
// }

// delete obj.age;

// console.log(obj)


// Object Destructure
// const {name , classs , age} = obj;

// obj.name
// obj
// obj.Hell="Afzal";
// obj.classs = "Design";

// console.log(name)

// for (const prop in obj){
//         // console.log(prop)
//         const newObj ={[obj[prop]]:prop};
//         console.log(newObj)
// }


// [hello.name]
// const heading = document.getElementById("heading");
// // const inp = document.getElementById("inp").value;
// // console.log(inp);
// const span = document.getElementsByClassName("span")[1];
// span.setAttribute("id" ,"abc" );
// span.removeAttribute("id");
// const heading2 = document.getElementsByTagName("span");





// TASK 

// const heading = document.querySelectorAll("span")[2];
// const body = document.querySelector("body");
// const button = document.querySelector("#button");
// const submit = document.querySelector("#submit");
// const inp = document.getElementById("inp");

// console.log(body);

// heading.style.color = "red";
// heading.style.backgroundColor="red";
// heading.style.fontSize = "35px";

// heading.innerText = 'Shoib';
// let val = true;
// function hi(){
//     // console.log(inp.value)
//     if(val === true){
//         body.style.color = "white";
//         body.style.backgroundColor = "black";
//         button.innerText = "Light Mode"
//     }else{
//         body.style.color = "black";
//         body.style.backgroundColor = "white";
//         button.innerText = "Dark Mode"

//     }
//     val = !val;
//     // heading.style.cssText = "color:green; background-color:pink; display:none"
//     // console.log("Hey");
// }

// submit.addEventListener('click', function(){
//     heading.innerText = inp.value

// })


// button.addEventListener("click",hi)


















// let cars= ['honda','cruiser','mg','vezel']
// // let car= cars.push('civic')
// cars.push('glory')
// console.log(cars)
// even odd numbers
// for(a=0; a<=15;a++){
//     if(a%2!==0){
//         document.write(a)
//     }
// }

// let well=0
// for(a=2; a<=100; a++){
//         console.log(a)
// }

const button = document.querySelectorAll(".button");
console.log(button);


button.forEach((item)=> {
        item.addEventListener("click" , function() {
            console.log((item.innerHTML));    
        })
})

// Template Strings

const name = "Haseeb";
const classs = "Web"

// console.log("My name is " + name+". And I am studying in "+ classs)
console.log(`Hello my name is ${name}`)


// console.log(eval("20 + 20"))