var a = document.getElementById('txt2');

a.onclick= function(){
    
   var x = new XMLHttpRequest();
   x.onreadystatechange = function()
   {
     if(x.readyState === XMLHttpRequest.DONE)
     {
         if(x.status === 304)
         {
             var txt2 = x.responseText;
             var span = document.getElementById('count');
             span.innerHTML = txt2.toString();
         }
     }
    
   };
     x.open('GET','http://prafullsharma48.imad.hasura-app.io/counter',true);
     x.send(null);
};

