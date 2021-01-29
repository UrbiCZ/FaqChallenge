const accordionHead = document.querySelectorAll('.accordion-head');
const firstItem = document.querySelector('.accordion-item:first-child .accordion-body');
const cube = document.querySelector('.box');
const wrapper = document.querySelector('.wrapper-king');

const temp = document.querySelector('h1');

firstItem.style.height = `${firstItem.scrollHeight}px`;
firstItem.previousElementSibling.querySelector('img').style.transform = 'rotate(180deg)';

accordionHead.forEach(item => {
    item.addEventListener('click', function(e) {
        const sibling = e.currentTarget.nextElementSibling;
        const sipka = e.currentTarget.querySelector('img');
        const oHeight = sibling.scrollHeight;
        const styly = window.getComputedStyle(sibling).height;
        if(styly === '0px') {
            sibling.style.height = `${oHeight}px`;
            sipka.style.transform = 'rotate(180deg)';
        } else {
            sibling.style.height = '0px';
            sipka.style.transform = 'rotate(0deg)';
        }
    });
});

window.addEventListener('resize', (e) => {
    accordionHead.forEach(item => {
        if((item.nextElementSibling.style.height === "") || (item.nextElementSibling.style.height === "0px")) {
            item.nextElementSibling.style.height = "0px";
        } else {
            item.nextElementSibling.style.height = item.nextElementSibling.querySelector('p').offsetHeight + 15 + 'px';
        }
    });
    
});

window.addEventListener("orientationchange", function(event) {
    accordionHead.forEach(item => {
        if((item.nextElementSibling.style.height === "") || (item.nextElementSibling.style.height === "0px")) {
            item.nextElementSibling.style.height = "0px";
        } else {
            item.nextElementSibling.style.height = item.nextElementSibling.querySelector('p').offsetHeight + 15 + 'px';
        }
    });
});