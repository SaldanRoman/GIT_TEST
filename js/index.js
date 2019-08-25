document.querySelector('#next').addEventListener('click', nextImg);
document.querySelector('#prev').addEventListener('click', prevImg);

let linkArr = document.querySelectorAll('.slider-container>.slider-images>a');
let imgArr = document.querySelectorAll('.slider-container>.slider-images>a>img');
let linkCount = 0;

function nextImg(){
    if(linkCount===linkArr.length-1){
        linkCount = 0;
        linkArr.forEach(item=> item.classList.remove('display-visible'));
        linkArr[linkCount].classList.add('display-visible');
        imgArr.forEach(item=> item.classList.remove('image-visible'));

        setTimeout(function(){
            imgArr[linkCount].classList.add('image-visible');
        },1)    
    }
    else{    
        linkArr[linkCount].classList.remove('display-visible');
        linkArr[linkCount+1].classList.add('display-visible');
        setTimeout(function(){
            console.log(imgArr[linkCount])
            imgArr[linkCount].classList.remove('image-visible');
            imgArr[linkCount+1].classList.add('image-visible');
            linkCount++
    },1);
    
    }
}


function prevImg(){
    if(linkCount===0){
        linkCount = linkArr.length-1;
        linkArr.forEach(item=> item.classList.remove('display-visible'));
        linkArr[linkCount].classList.add('display-visible');
        imgArr.forEach(item=> item.classList.remove('image-visible'));

        setTimeout(function(){
            imgArr[linkCount].classList.add('image-visible');
        },1)    
    }
    else{    
        linkArr[linkCount].classList.remove('display-visible');
        linkArr[linkCount-1].classList.add('display-visible');
        setTimeout(function(){
            console.log(imgArr[linkCount])
            imgArr[linkCount].classList.remove('image-visible');
            imgArr[linkCount-1].classList.add('image-visible');
            linkCount--
    },1);
    
    }
}

// console.log(imagesWithLinks.length)

// function nextImg(){
//     if(i===imagesWithLinks.length-1){
//         imagesWithLinks.forEach(item=> item.classList.remove('visible'));
//         i=0;
//         imagesWithLinks[i].classList.add('visible')
//     }
//     else{
//         imagesWithLinks[i].classList.remove('visible')
//         imagesWithLinks[i+1].classList.add('visible');
//         i++
//     }
// }

// function prevImg(){
//     if(i===0){
//         imagesWithLinks.forEach(item=> item.classList.remove('visible'));
//         i=imagesWithLinks.length-1;
//         imagesWithLinks[i].classList.add('visible')
//     }
//     else{
//         imagesWithLinks[i].classList.remove('visible')
//         imagesWithLinks[i-1].classList.add('visible');
//         i--
//     }
// }

