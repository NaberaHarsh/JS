console.log("hello world");

var score = 100;          //Number

var average = 40.5;       //Floating number

var name = "sachin";      //String

var retired = true;      //Boolean


console.log(score);
console.log(average);
console.log(name);
console.log(retired);
console.log(score,average,name);

var a=5;
var b="hello";
console.log(a+b);

// lab set 1




 function AOT(a,b,c){ 
 

if(a+b <=c || a+c <=b  || b+c <=a)
{
return "not valid";
}
else
{
    var s=(a+b+c)/2;
var x=s*(s-a)*(s-b)*(s-c);
var area= Math.sqrt(x);
 return area;
}
 }


function temp1(cel){

console.log("celcius="+ cel);
var far;
far= (9/5)*cel +32;
return far;
}



function temp2(farh)
{
    console.log("F to C");
console.log("fahrenheit="+farh);
var cels;
cels=(5/9)*(farh-32);
return cels
}

// las set 2

function greater(a,b,c)
{
console.log("a="+a+" b="+b+" c="+c);
if(a>b && a>c)
return a;
else if(c>b && c>a)
return c;
else 
return b;
}

function factor(a)
{
    console.log("multiple of 7 or 3");
    if((a%3 ==0) || (a%7 ==0))
    return true;
    else 
    return false;

}






