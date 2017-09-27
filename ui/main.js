var a = document.getElementById('txt2');
var counter = 0;
a.onclick= function(){
    
   var x = new XMLHttpRequest();
   x.onreadystatechange = function(){
     if(request.readyState == XMLHttpRequest.Done)
     {
         if(request.status == 304)
         {
             var counter = request.responseText;
             var x = document.get.elementById('count');
             x.innerHTML = counter.toString();
         }
     }
     request.open('GET','http://prafullsharma48.imad.hasura-app.io/counter',true);
     request.send(null);
   };
    
};

