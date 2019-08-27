document.querySelector('#sliderButtonNext').addEventListener('click', nextImg);
document.querySelector('#sliderButtonPrev').addEventListener('click', prevImg);

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

const arrayOfImages = [
    {
        imgSrc: './img/slider/1.jpg',
        title: '',
        description: '',
        buttonText: '',
        buttonUrl: ''
    },
    {
        imgSrc: './img/slider/2.jpg',
        title: '',
        description: '',
        buttonText: '',
        buttonUrl: ''
    },
    {
        imgSrc: './img/slider/3.jpg',
        title: '',
        description: '',
        buttonText: '',
        buttonUrl: ''
    },
    {
        imgSrc: './img/slider/4.jpg',
        title: '',
        description: '',
        buttonText: '',
        buttonUrl: ''
    }
]

function sliderNext() {
    const leftImg = document.querySelector('.slider-image-item.left');
    leftImg.remove();
    const curentImg = document.querySelector('.slider-image-item.current');
    curentImg.classList.add('left');
    curentImg.classList.remove('current');
    const rightImg = document.querySelector('.slider-image-item.right');
    rightImg.classList.add('current');
    rightImg.classList.remove('right');
    const rightImgIndex =  getNextIndex(rightImg, 'right')
    sliderContainer.appendChild(generateImage(arrayOfImages[rightImgIndex].imgSrc, rightImgIndex, 'slider-image-item right'));


}

function getNextIndex (el, direction) {
const currentIndex = +el.getAttribute('data-index');
    if(direction==='right'){
    return arrayOfImages[currentIndex+1] ? currentIndex+1 : 0
    }
    return arrayOfImages[currentIndex-1] ? currentIndex-1 : arrayOfImages.length-1

}

function sliderPrevious() {
    const rightImg = document.querySelector('.slider-image-item.right');
    rightImg.remove();
    const curentImg = document.querySelector('.slider-image-item.current');
    curentImg.classList.add('right');
    curentImg.classList.remove('current');
    const leftImg = document.querySelector('.slider-image-item.left');
    leftImg.classList.add('current');
    leftImg.classList.remove('left');
    const leftImgIndex =  getNextIndex(leftImg, 'left');
    sliderContainer.prepend(generateImage(arrayOfImages[leftImgIndex].imgSrc, leftImgIndex, 'slider-image-item left'));

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

function generateImage(src, index, classes) {
    const image = document.createElement('img');
    image.setAttribute('src', src);
    image.setAttribute('data-index', index);
    image.setAttribute('class', classes);
    return image
}

(function () {
window.sliderContainer =  document.querySelector('.new-slider-img');
sliderContainer.appendChild(generateImage(arrayOfImages[3].imgSrc, 3, 'slider-image-item left'));
sliderContainer.appendChild(generateImage(arrayOfImages[0].imgSrc, 0, 'slider-image-item current'));
sliderContainer.appendChild(generateImage(arrayOfImages[1].imgSrc, 1, 'slider-image-item right'));
})()

// document.querySelector('#next2').addEventListener('click', function(){
//     document.querySelectorAll('.new-slider-img a')[0].style.order = '2';
// })


// function generateSliderItem(itemObject, index, classes){

// }