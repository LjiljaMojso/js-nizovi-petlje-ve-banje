//task new 1
// Repack old array to the new one, in the same order.Console log result

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];
var i=0;
while (i<dataOld.length) {
    dataNew[i]=dataOld[i];
    i++;
}
console.log(dataNew)

// task new 2
//Repack old array to the new one, in the reverse order.Console log result.



var dataOld = [34, true, "Peter", 1992];
var dataNew = [];
var i=0;
while (i<dataOld.length) {
    dataNew[i]=dataOld[dataOld.length-1 -i ];
    i++;
}
console.log(dataNew)

// task new 3
// Repack old array to the new one, so the data from two arrays is joined, starting with existing data from the new one.Console log result.
var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];
var i=0;
for (var i = 0; i < dataOld.length; i++) {
    dataNew[i]= dataNew[i++];{
        if (i < dataOld.length) {
            dataNew[i+2]=dataOld[i--];
        }
    }

}

console.log(dataNew)

// task new 4
// Create a new array that contains data from both arrays, starting with data from array a. Console log result
var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var newArray =[];
for (let i = 0; i <a.length; i++) {
    newArray[i]= a[i];
    if(b[i]) {
        newArray[i + a.length] = b[i]; 
        
    }
   
}
console.log(newArray)
// primer sa časa

var data=[1,2,3,4];
data[data.length]=[];
var innerArray=data[data.length-1];
innerArray[innerArray.length]=0;
innerArray[innerArray.length]=5;
innerArray[innerArray.length]=9;
console.log(data)


// task new 5
// Create a new array that contains data from both arrays, but in alternating order, one element from array a, then one element from array b, and so on. 
var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var newArray =[];
for (let i = 0; i <a.length; i++) {
    if (i == 0) {
        newArray[i] = a[i];
    }   if (a[i]){
            newArray[newArray.length] = b[i];
        }if (b[i]){
              newArray[newArray.length] = a[i];
        }
        
}
console.log(newArray)



var newArray = joinTwoArray(a, b);

function joinTwoArray(arrayA, arrayB) {
    var newNewArray = [];
    for (var i = 0; i < arrayA.length; i++) {
        newNewArray.push(arrayA[i]);
        if (arrayB[i]) {
            newNewArray.push(arrayB[i]);
        }
    }
    return newNewArray;
}
console.log(newArray)



//task new 6
// Console log next pattern (you're allowed to use only single *)

// *
// **
// ***
// ****
// *****
// ******

var number="*";
while(number.length<=6){
    console.log(number)
    number=number+"*";
}

//task new 7
// Console log next pattern (you're allowed to use only single * or empty space)

// **********
// *        *
// *        *
// *        *
// *        *
// **********


var a = 10;
var b = 6;
var c = '*';
var d = ' ';


for (var i = 1; i <= b; i++) {
    if (i === 1 || i === b) {
        console.log(c.repeat(a));
    } else {
        console.log(c + d.repeat(a - 1) + c);
    }
}

