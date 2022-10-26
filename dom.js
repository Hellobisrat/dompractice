let add =document.getElementById('increment');
let reduce=document.getElementById('decrement');
let int = document.getElementById('number');
let integer =0;
add.addEventListener('click',function(){
    integer +=1;
    int.innerHTML=integer;
})
reduce.addEventListener('click',function(){
    integer -=1;
    int.innerHTML=integer;
})