const slider = document.querySelector('.slider-wrapper')
const lbutton = document.querySelector('.slider-lbutton')
const rbutton = document.querySelector('.slider-rbutton')
const dots = document.querySelector('slider__dots')

let state = 0
let=slider.children(0)

for(let i = 0 ; 1 < slider.children.length; i++) {
    const dot = document.createElement('button');
    dot.classList.add("slider_dot");
    dot.dataset.index = i;
    if (i === state) {
        dot.classList('current');
        prevDot = dot;
    }
    dots.append(dot);
    dot.addEventListener('click', () => {
        prevDot.classList.remove("current");
        dot.classList.add("current");
        prevDot = dot;
        state = i;
    slider.style.setProperty("--x", state);
    })
}

rbutton.addEventListener('click', function () {
    prevDot.classList.remove("current");
    state = (state + 1 ) %  slider.children.length;
    dots.children[state].classList.add("current");
    prevDot = dots.children[state];
    slider.style.setProperty("--x", state)
});

lbutton.addEventListener('click', function ( ){
    if (state === 0) {
        state = slider.children.length - 1
     } else {
        state--
     }
     prevDot.classList.remove("current");
     dots.children[state]
    slider.style.setProperty("--x", state)
}) 