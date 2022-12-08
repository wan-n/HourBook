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
    const textBox = document.getElementsByClassName('title-box')[0];
    const logo = document.getElementsByClassName('title-logo')[0];
    const title = document.getElementsByTagName('h1')[0];

    textBox.style.transition = '1s';
    logo.style.transition = '.5s';
    title.style.transition = '.5s';
    textBox.classList.remove('opacity-zero');
    textBox.classList.remove('to-bottom');

    setTimeout(() => {
        logo.classList.add('opacity-zero');
        setTimeout(() => {
            logo.classList.add('hide');
            title.style.height = 'auto';
            title.classList.remove('opacity-zero');
        }, 500);
    }, 1000);
}