
$("#myButton").click(function(){console.log("click")});


$("#myButton1").click(function(){alert("hello " + ian.fullName())});

//document.getElementById('myButton3').addEventListener('click',function () { alert('hello!');},false);


//arrays and objects
var names = ["Ian", "Angela", "Nicole", "Sam"]
var ian = { 
    firstName: "Ian", 
    lastName: "Kitchen",
    fullName: function(){return this.firstName + " " + this.lastName}
}
 
$("#reverseNames").click(function(){
  console.log(names)
  var reverseNames = []
  for(var i=3; i >= 0; i--)
    {
      reverseNames.push(names[i])
      console.log(i)
    }
  console.log(reverseNames)
});

