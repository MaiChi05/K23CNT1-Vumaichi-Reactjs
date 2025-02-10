var arr = [10, 20, 25, 15];
var [a,b]=arr;
console.log("a=",a);
console.log("b=",b);
[a,b,c =arr];
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
//object
 const studen = {
    name: "mai chi",
    age:19,
    phone:"01234567890123456789",
    email:"maichi@gmail.comcom"
 }
 var {name, phone}= studen;
 //=>name:"mai chi",  phone:"0123456789123456789"
 console.log("name:",name);
 console.log("phone",phone);