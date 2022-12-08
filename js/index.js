makeScrollAnimation();
showTitleMotion();












function makeScrollAnimation(){
    //쓰로틀링
    let lastScrollY = 0;
    let timer;
    window.addEventListener("scroll", () => {
        if (!timer) {  //타이머가 설정되어있을 땐 실행되지 않도록 한다.
            timer = setTimeout(() => {
                timer = null;

                //메서드

                lastScrollY = window.scrollY;
            }, 100);
        }
    });
}



function showTitleMotion(){
    const textBox = document.querySelector('.title-box');
    const logo = document.querySelector('.title-logo');
    const title = document.querySelector('h1');
    const arrow = document.querySelector('.scroll-arrow');

    textBox.style.transition = '.8s';
    logo.style.transition = '.5s';
    title.style.transition = '.5s';
    arrow.style.transition = '1s';
    textBox.classList.remove('opacity-zero');
    textBox.classList.remove('to-bottom');

    setTimeout(() => {
        logo.classList.add('opacity-zero');
    }, 800);

    setTimeout(() => {
        logo.classList.add('hide');
        title.style.height = 'auto';
        title.classList.remove('opacity-zero');
    }, 1300);

    setTimeout(() => {
        arrow.classList.remove('opacity-zero');
    }, 1500);
}