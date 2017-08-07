/*
console.log('Loaded!');

var img=document.getElementById('madi');

var marginleft=0;
function moveright(){
    marginleft = marginleft+1;
    img.style.marginLeft= marginleft+'px';
}

img.onclick= function(){
    var interval = setInterval(moveright,50);
    //img.style.marginLeft='100px';
};
*/

//Counter
var button = document.getElementById('counter');

var counter =0;
button.onClick= function(){
  
  //Make a request to the counter endpoint
  
  //capture the response and store it in a variable
  
  //render the variable  in the correct span
  counter = counter+1;
  var span = document.getElementById("count");
  span.innerHTML=counter.toString();
    
};