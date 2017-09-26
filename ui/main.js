var a = document.getElementById('txt2');
var counter = 0;
a.onclick = function(){
    
    counter = counter+1;
    var b = document.getElementById('count');
    b.innerHTML = counter.toString();
    
};

