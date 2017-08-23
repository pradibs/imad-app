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
*/

var submit = document.getElementById('submit_btn');
//submit username/password to login
submit.onclick= function(){
    
    //Make a request to the counter endpoint
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange= function(){
      if(request.readyState=== XMLHttpRequest.DONE){
          //Take some action
          if(request.status=== 200){
          console.log('user  logged in');
            alert('logged in');
          }else if  (request.status=== 403){
              alert('password was incorrect');
          } else if (request.status=== 500){
              alert('something wrong');
          }
      }
  };
  
 //make request
 var username= document.getElementById('username').value;
 var password= document.getElementById('password').value;
 console.log(username);
 console.log(password);
 request.open('POST','http://pradibs.imad.hasura-app.io/login',true);
 request.setRequestHeader('Content-Type', 'application/json');
 request.send(JSON.stringify({username: username, password: password}));
    
    //make request to the server and send name
   
};
