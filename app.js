alert("Hi there, Sailor!");

console.log("RAMZAN MUBARAK");


var title ="NEW LIST";
console.log( title);


var a = 50;
var b = 80; 
var c = 20;
var x =(a + b) - c
console.log(x);


var x ="MUHAMMMAD" ;
var y ="SHAHZAIB";


var z = x + y;
console.log(z)

// **************poss incriment*****************

var a =100;
a++;
console.log(a)

// **************poss dicriment*****************

var a =100;
a--;
console.log(a)


var b =20;
b--;
console.log(b)


var firstname = prompt("Enter your name", "MUHAMMAD");
var lastname = prompt("Enter your lastname","SHAHZAIB");
var city = prompt("Enter city", "Karachi");
console.log(firstname + " " + lastname + " From " + city);


var maiaarahaho = true;

if (maiaarahaho == true) {
    console.log("YES");
} else{
    console.log("NO");
}


// var mathMarks = prompt("Enter your marks in Math:");
// var scienceMarks = prompt("Enter your marks in Science:");
// var englishMarks = prompt("Enter your marks in English:");
// var pstMarks = prompt("Enter your marks in Pst:");
// var bioMarks = prompt("Enter your marks in bio:");

// mathMarks = +(mathMarks);
// scienceMarks = +(scienceMarks);
// englishMarks = +(englishMarks);
// pstMarks = +(pstMarks);
// bioMarks = +(bioMarks);

// var totalMarks = mathMarks + scienceMarks + englishMarks + pstMarks + bioMarks;
// var averageMarks = totalMarks / 5;

// console.log("Total Marks:" +totalMarks);
// console.log("Average Marks:" + averageMarks);


var citys = "Karachi, Multan, Lahore, Peshawar, Swat, Islamabad, Rahim Yar khan";

console.log(citys)


var English = parseInt (prompt ( "Enter English Marks"));
var Urdu = parseInt (prompt ("Enter Urdu Marks"));
var Pst = parseInt (prompt ("Enter Pst Marks"));
var Physic = parseInt (prompt ("Enter Physic Marks"));
var Math = parseInt (prompt ("Enter Math Marks"));

function Persentage(num1,num2,num3,num4,num5)
{
    var x = num1 + num2 + num3 + num4 + num5;
    var z =x/500 * 100;
    return z;
}
var Total = Persentage (English,Urdu,Pst,Physic,Math);
console.log("Total Percentage is :" + Total + "%");