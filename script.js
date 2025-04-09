var img1 =  document.querySelector('#one')
var img2 =  document.querySelector("#two")
var img3 = document.querySelector('#three')
var img4 = document.querySelector('#four')
var img5 = document.querySelector('#five')
var img6 = document.querySelector('#six')
var img7= document.querySelector('#seven')
var img8 = document.querySelector('#eight')
var img9= document.querySelector('#nine')
var img10 = document.querySelector('#ten')
var btn = document.querySelector('button')

btn.addEventListener('click', function(){
    var src1 = img1.src;
    var src2 = img2.src;
    var src3 = img3.src;
    var src4 = img4.src;
    var src5 = img5.src;
    var src6 = img6.src;
    var src7 = img7.src;
    var src8 = img8.src;
    var src9 = img9.src;
    var src10 = img10.src;
   
    img1.src = src6;
    img2.src = src10;
    img3.src = src1;
    img4.src = src2;
    img5.src = src9;
    img6.src = src4;
    img7.src = src3;
    img8.src = src5;
    img9.src = src7;
    img10.src = src8;

})

