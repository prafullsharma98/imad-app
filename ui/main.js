var a = document.getElementById("counter");
var counter = 0;
a.onclick = function()
{
       counter = counter+1;
       var s = document.getElementById("count");
       span.innerHTML = counter.toString();
}
