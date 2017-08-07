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

button.onclick= function(){
  
  //Make a request to the counter endpoint
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange= function(){
      if(request.readyState=== XMLHttpRequest.DONE){
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

//submit name
var nameInput= document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick= function(){
    
    //Make a request to the counter endpoint
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange= function(){
      if(request.readyState=== XMLHttpRequest.DONE){
          //Take some action
          if(request.status=== 200){
            //capture list of  names  and render it as a list
            var names= request.responseText;
            names=JSON.parse(names);
            var list='';
            for (i=0; i<names.length; i++)
            {
             list += '<li>' + names[i] + '</li>';
            }
            
            var ul = document.getElementById('nameList');
            ul.innerHTML=list;
          }
      }
  };
  
 //make request
 request.open('GET','http://pradibs.imad.hasura-app.io/submit-name?name='+ name,true);
 request.send(null);
    
    //make request to the server and send name
   
};
