var button1=document.getElementById('increment');
button1.addEventListener('click',incr)
var counter = 0;
var input=document.getElementById('body')

function incr() {
    counter=counter+1
    console.log(counter);

    document.getElementById('number').innerHTML=counter;
    var body=document.body.style.backgroundColor='red'
    input.innerHTML=body;
    
}

var button2=document.getElementById('decrement');
button2.addEventListener('click',decr)
function decr() {
    counter=counter-1;
    console.log(counter);
    document.getElementById('number').innerHTML=counter;
    var body1=document.body.style.backgroundColor='violet'
    input.innerHTML=body1;
    
}
var button3=document.getElementById('resets');
button3.addEventListener('click',clear)
function clear() {
    counter=0;
    document.getElementById('number').innerHTML=counter;
    var body2=document.body.style.backgroundColor='green'
    input.innerHTML=body2;
    
}