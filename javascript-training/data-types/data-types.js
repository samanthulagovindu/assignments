// Data types in javaScript

// Primitive data types(immutable)
// Non-Primitive  Data Types(Mutable)

// immutable
let a=10;
a+10;
console.log(a);

// Mutable
let obj = {
    "name":"govindu",
    "id": 1234
}
obj.age =34;
console.log(obj);

// data types in javaScript
/************************************************/
/*********Primitive Datatypes*************/
/************************************************/
// number,string,boolean, undefine,null and symbol - six different data types

// 1. number==> The Data type to store numbers with decimals,without decimals,without using any quotations.
let num1 =10;
let num2 =12.23187;
console.log(num1);
console.log(num2);

// 2. string==> The datatype to store text values or a collection of characters together with in the quotations (single,double quotes or `  backticks)
let empName = 'Govindu';
let location = "Bangalore";
let company = `ABB`;
console.log(typeof empName);
console.log(typeof location);
console.log(typeof company);

console.log("empname is "+empName+ "emp location is" +location);
console.log(`empname is ${empName} and Emp Location is ${location}`);

// 3. Boolean ==> The data type to store true or false values
let x=10;
let y=20;
let z=x>y;
console.log(typeof z);

// 4. Undefined ==>undefined repregents a variable that has been declared but not assigned any value.
let age=37;

console.log(age);

// 5. null==> null repregents a variable that has been declared and assigned a null or empty value
let salary=100000;
salary=null;
console.log(salary);

// 6. Symbol==> Symbol repregents a unique hidden identifier.

/************************************************/
/*********Non-Primitive Datatypes*************/
/************************************************/

// 1. Object ==> object data type repregents a collection of key value pairs within the curly braces. 
let person={
    name:"Govindu",
    empId:12345,
    visaStatus:true,
    address:{
        city:"Banaglore",
        state:"Karnataka",
        zip:560049
    }
}

person.salary=100000;

// print the data
console.log(person.name);
console.log(person.address.city);

console.log(person["name"]);
console.log(person.address["city"]);

console.log(person);

// 2. Array ==> array repregents a list of values
let fruits=["apple","mango","grapes","banana"];
let prices=[100,50,400,200];
let fruitsAndPrices=["apple",100,"mango",50,"grapes",400,"banana",200];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);
console.log(fruits[1]);
console.log(fruitsAndPrices[3]);

// 3.Function==>

