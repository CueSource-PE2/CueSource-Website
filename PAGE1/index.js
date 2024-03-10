window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const rocket = document.querySelector('.rocket');
    rocket.style.transform = `translate(${scrollValue * 1.5}px,${-scrollValue*0.5}px)`;
});