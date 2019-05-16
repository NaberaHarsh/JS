/*
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

*/


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


// lab set 3






function cap(str){ 
    var words = str.split(" "); 
    for (var i=0 ; i < words.length ; i++){ 
       var testwd = words[i]; 
       var firLet = testwd.substr(0,1); 
       var rest = testwd.substr(1, testwd.length -1) 
       words[i] = firLet.toUpperCase() + rest 
    } 
     return  words.join(" "); 
 }

function DNA(str1, str2){
    var count=0;
var arr1 = str1.split("");
var arr2 = str2.split("");

for(i=0; i<= arr1.length ; i++)
{
    if(arr1[i] != arr2[i])
    count++;
    
            }
return count;
}

function pangram(arr)
{
var x=arr.split(" ").join("").split(".").join("");
var y=x.toLowerCase();
var apl="abcdefghijklmnopqrstuvwxyz";
var count=0;
if(x.length<26)
    return "all apphabet are not present";
    else{
for(i=0;i<26;i++)
{
    for(j=0;j<y.length;j++)
    {
       if(apl[j]==y[i])
       {
           count++;
           break;
               }}
      }}
      return count>25? true: false;

      


}

function isogram(arr)
      { var count=0;
          var x=arr.split("");
          for(i=0; i<arr.length; i++)
          {
              for(j=i+1; j<arr.length; j++)
              {
                if(x[i]==x[j])
                {  count++;
                  break;}
              }

          }
          return count==0?true:false;
      }

      function acronym(arr)
      {
          var x= arr.split(" ");
          var z=[];
          for(i=0; i<x.length; i++)
          {
              var y= x[i].substr(0,1);
                            z[i]=y; 
          }
          return z.join("").toUpperCase() ;
      }

/*
var cities = [];
var metro=["delhi","jaipur","mumbai"];

console.log("cities:"+ cities);
console.log("metros:"+ metro);

cities.push("ajmer");
console.log(cities);

cities.push("jaipur");
cities.push("udaipur");

console.log(cities);

var retValPush = cities.push("delhi");

console.log(retValPush);

var groups = [["sachin","rahul"],["virat","rohit","vijay"]]


console.log(groups[1][1]);   //returns "rohit";

groups[1][2]    //returns "vijay";

groups[1][0] = "kohli";
*/



//lab set 4;


function test(arr){
    var count=0;
    for(i=0; i<=arr.length;i++)
    {
        if((arr[i]==30) || (arr[i]==40))
       count = count+1;
       
    }
    if( count>0)
    return "present";
    else
    return "not present";
}



function swap(arr)
{
    
    var a = arr[0];
    var b = arr[arr.length - 1]
    var z;
    z=a;
    a=b;
    b=z;
    return a+" swapped by "+ b;
}

function find(arr)
{
    var high=arr[0];
    var low =arr[0];
    for(i=1; i<arr.length;i++)
    {
        if(arr[i]>high)
        {
            high=arr[i];
        }
        if(arr[i]<low)
        low=arr[i];
    }

    return "highest is "+ high +"  and lowest is "+low;
}

function add(arr)
{
    var sum=0;
        for( i=0; i<arr.length; i++)
    {    sum = sum + arr[i] ;
      }
        return "sum is "+ sum;
    }

    //object
/*
    person={}
    person.name="harsh";
    person.age=21
    person.gender="male"
     console.log(person);
delete person.age;
*/

var records = [

    {
      "balance": "$1,025.60",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "blue",
      "name": {
        "first": "Weeks",
        "last": "Steele"
      },
      "company": "KROG",
      "email": "weeks.steele@krog.net",
      "phone": "+1 (891) 411-2923",
      "address": "549 Strong Place, Muir, North Dakota, 5806"
    },
    {
      "balance": "$1,998.21",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "blue",
      "name": {
        "first": "Ware",
        "last": "Sharp"
      },
      "company": "ZYTREK",
      "email": "ware.sharp@zytrek.co.uk",
      "phone": "+1 (809) 591-3842",
      "address": "386 Madison Street, Chical, North Carolina, 4447"
    },
    {
      "balance": "$2,313.87",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "brown",
      "name": {
        "first": "Munoz",
        "last": "Hopper"
      },
      "company": "ECRATER",
      "email": "munoz.hopper@ecrater.ca",
      "phone": "+1 (800) 543-2646",
      "address": "958 Kathleen Court, Soudan, Palau, 5436"
    }]

    //by reference
/*
    var cities=["jaipur","delhi","mumbai"]
    var village=cities;
    */

   /* person.speak= function()                                   // methods in object
    {
        console.log("hi");
    }

*/
    // lab set 5


    var cart=[];
    function addItem(itemName)
    {
        cart.push(itemName);
    }

    function removeItem(itemName)
    {
        var index= cart.indexOf(itemName);
        cart.splice(index,1);
    }

    function size()
{
    var x= cart.length;
    return x;
}

//lab set 6

person={}
person.name;
person.age;
person.mno=[];

person.getName = function()
{
    console.log(person.name);
}

function setName(newName)
{
person.name=newName;
}

function getStatus()
{
    if(person.age>100 || person.age==0)
    return "not valid age";
    else
    if(person.age>60)
    return "old";
    else
    if(person.age>20)
    return "adult";
    else
    if(person.age>12)
    return "teenager";
    else
    return "child";  
    
}

function addNo(num){
    person.mno.push(num);
}
    
function addMobile(mobileNumber){
    person.mno.push(mobileNumber); 
}

//lab set 7

person1 = {};
person2={};
person3={};
arr=[person1, person2, person3]

person1.name="harsh";
person1.age=20;
person1.mno=[8794561236];

person2.name="pratistha";
person2.age="21";
person2.mno=[9568471528];

person3.name="sourabh";
person3.age=22;
person3.mno=[7768471528];

function getValue(obj,prop) 
{
    return obj[prop];
}
function setValue(obj,prop,propValue)
{
   return obj[prop]=propValue;
    
}

function getStatus(obj){
    
        if(obj.age>100 || obj.age==0)
        return "not valid age";
        else
        if(obj.age>60)
        return "old";
        else
        if(obj.age>20)
        return "adult";
        else
        if(obj.age>12)
        return "teenager";
        else
        return "child";  
        
    }

    function addMobile(obj,num){
        return obj.mno.push(num);
    }
    
    function removeMobile(obj,num)
    {
        var x=obj.mno.indexOf(num);
        return obj.mno.splice(x,1);

    }

    function totalMobiles(obj)
    {
        return obj.mno.length;
    }

