/*

 */

students_name = ['tito', 'hafiz', 'tuhin']
x = students_name.shift()
document.write(x + "<br>")
document.write(students_name.join(" | ") + "<br>")

for (let i = 0; i < students_name.length; i++) {
    document.write(students_name[i].toUpperCase() + "<br>")
}


/*
Array.prototype.Ucase = function (i) {
    return this[i].toUpperCase()
}

student_name = ['tito', 'hafiz']
document.write(student_name[0].toUpperCase() + "<br>")
document.write("No of students :" + student_name.length + "<br>")
document.write(student_name.Ucase(0) + "<br>")

for (let i = 0; i < student_name.length; i++) {
    document.write(student_name.Ucase(i) + "<br>")
}
 */


/*
var rolls = new Array();

rolls[0] = 3
document.write(rolls[0])
 */

/*
function Student(firstName, lastName) {
    this.firstName = firstName
    this.lastLame = lastName
    this.fullName = function () {
        return this.firstName + " " + this.lastLame
    }
}

var student1 = new Student('moin', 'ahamed')
var student2 = new Student('ali', 'ahamed')

document.write(student1.firstName + "<br>")
document.write(student1.lastLame + "<br>")
document.write(student2.firstName + "<br>")
document.write(student2.lastLame + "<br>")
document.write(student2.fullName() + "<br>")

 */


/*
var student = {
    name: "tito", roll: "01", id: 123
}

document.write(student.name, "<br>")
document.write(student.roll, "<br>")
document.write(student.id, "<br>")
document.write(student['name'].length, "<br>")
document.write(student.name.length, "<br>")

*/


/*
function mulNum() {
    return arguments[0] * arguments[1]
}


document.write(mulNum(5, 15), '<br>')
document.write(mulNum(5, 4), '<br>')

*/


// function printName() {
//     for (let x = arguments[0]; x <= arguments[1]; x++) {
//         document.write(x,'<br>')
//     }
// }
// document.write("from 5 to 15 <br>")
// printName(5, 15)
// document.write("from 15 to 25 <br>")
// printName(15, 25)

// function printName(from, to) {
//     for (let x = from; x <= to; x++) {
//         document.write(x,'<br>')
//     }
// }
//
// printName(5, 15)
// printName(15, 25)


/*
x = prompt("Enter a Name :")

if ((x == null) || (x === '')) {
    document.write("Enter a string")
}
else{
    document.write(x)
}
 */


/*
x = 1
while (true) {
    if (x < 30) {
        document.write(x, "<br/>")
        x++;
    } else {
        break;
    }

}
 */


/*
 for (let x=1;x<100;x++){
     document.write(x ,"<br/>")
 }


*/


// x = 3
//
// switch (x) {
//     case 1:
//         document.write("saturday")
//         break;
//
//     case 2:
//         document.write("sunday")
//         break;
//
//     default:
//         document.write("input valid day number")
// }


// document.write("hello world");
// alert("hello World");
// a = 6;
// b = 7;
// if (a > b) {
//     document.write("a is greater")
// } else if (a < b) {
//     document.write("b is grater")
// } else {
//     document.write("b is greater")
// }


/*
var x;
x = "sourov sarker"
document.write(typeof x)
document.write("<br/>")
document.write(5 / 3)

document.write(x)
/*

 */
/*
eight types of data types
we cant use reserve keywords



1. pre increment post increment




* hello java script
*
*
*  */