// Assignment -3 (Arrays/Datatypes/Operators)

// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students

// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0

let studentNames: string[] = ["Suresh","Mahesh","Naresh"];
let studentMarks: number[] = [75, 80, 82];
let total:number = 0;
let updatedMarks:number[] = [];
console.log("Updated Marks");
for(let i=0; i<studentMarks.length;i++){
updatedMarks[i]= studentMarks [i]+10;
total += updatedMarks [i];
console.log(`${studentNames[i]}:${updatedMarks[i]}`);
}
let average:number=total/updatedMarks.length;
console.log(`Average Marks:${average}`);