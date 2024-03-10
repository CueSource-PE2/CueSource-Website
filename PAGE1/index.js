window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const rocket = document.querySelector('.rocket');
    rocket.style.transform = `translateX(${scrollValue * 1.5}px)`;
});