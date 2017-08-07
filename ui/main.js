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
var button = document.getElementById('Counter');
var counter =0;

button.onclick= function(){
  
  //Make a request to the counter endpoint
  var request = new XMLHttpResponse();
  
  //capture the response and store it in a variable
  request.onreadystatechange= function(){
      if(request.readyState=== XMLHttpRequest.Done){
          //Take some action
          if(request.status=== 200){
              var counter= request.responseText;
              var span= document.getElementById('count');
              span.innerHTML= counter.toString();
          }
      }
  };
  
 //make request
 request.open('GET','http://pradibs.imad.hasura-app.io/counter',true);
 request.send(null);
    
};