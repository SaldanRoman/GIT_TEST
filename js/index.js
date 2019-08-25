let imagesWithLinks = document.querySelectorAll('.slider-container>.slider-images>img');
let i = 0;
document.querySelector('#next').addEventListener('click', nextImg)
document.querySelector('#prev').addEventListener('click', prevImg)

console.log(imagesWithLinks.length)

function nextImg(){
    if(i===imagesWithLinks.length-1){
        imagesWithLinks.forEach(item=> item.classList.remove('visible'));
        i=0;
        imagesWithLinks[i].classList.add('visible')
    }
    else{
        imagesWithLinks[i].classList.remove('visible')
        imagesWithLinks[i+1].classList.add('visible');
        i++
    }
}

function prevImg(){
    if(i===0){
        imagesWithLinks.forEach(item=> item.classList.remove('visible'));
        i=imagesWithLinks.length-1;
        imagesWithLinks[i].classList.add('visible')
    }
    else{
        imagesWithLinks[i].classList.remove('visible')
        imagesWithLinks[i-1].classList.add('visible');
        i--
    }
}

