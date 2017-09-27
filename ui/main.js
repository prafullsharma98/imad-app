var a = document.getElementById('txt2');

a.onclick= function(){
    
   var x = new XMLHttpRequest();
   x.onreadystatechange = function(){
     if(x.readyState === XMLHttpRequest.DONE)
     {
         if(x.status === 304)
         {
             var counter = request.responseText;
             var y = document.get.elementById('count');
             y.innerHTML = counter.toString();
         }
     }
    
   };
     request.open('GET','http://prafullsharma48.imad.hasura-app.io/counter',true);
     request.send(null);
};

