let btns = document.querySelectorAll('.btn');
let img = document.getElementById('img-box');

let array = ['./Images/images (1).jpg',"./Images/images (2).jpg","./Images/images (3).jpg","./Images/images (4).jpg","./Images/images (5).jpg","./Images/images (6).jpg"];
let index = 0;

btns.forEach(btn => {
   btn.addEventListener('click',(e)=>{
    let btn_cls = e.currentTarget.classList;
    if(btn_cls.contains('btn-left')){
        index--;
        if(index < 0){
            index = array.length-1;
        }
        img.src = array[index]
    }
    else if(btn_cls.contains('btn-right')){
        index++;
        if(index > array.length -1){
            index = 0
        }
        img.src = array[index]
    }
   })
});

setInterval(() => {
    index++;
    if(index > array.length-1){
        index = 0;
    }
    img.src = array[index]
}, 5000);
