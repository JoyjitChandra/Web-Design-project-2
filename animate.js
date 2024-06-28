function changebg(){
    var scrollvalue= window.scrollY;
    console.log(scrollvalue);
    var navbar= document.getElementById('navbar')
    if(scrollvalue>100){
        navbar.classList.add('bgColor');
    }
    else{
        navbar.classList.remove('bgColor');
    }

}
window.addEventListener('scroll',changebg)

let parallax= document.getElementsById('quotes')

window.addEventListener('scroll',function(){
  var value= window.scrollY;
   parallax.style.top = value*0.5 + 'px';
})



let testimoni= document.getElementById ('testimoni-img')

window.addEventListener('scroll',function(){
  var value= window.scrollY;
   testimoni.style.top = value* 0.5 + 'px';
})