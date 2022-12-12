makeScrollAnimation();

makeTitleSA();
makeIntroSA();










function makeScrollAnimation(){
    //쓰로틀링
    let lastScrollY = 0;
    let timer;
    window.addEventListener("scroll", () => {
        if (!timer) {  //타이머가 설정되어있을 땐 실행되지 않도록 한다.
            timer = setTimeout(() => {
                timer = null;

                //메서드
                makeIntroSA();

                lastScrollY = window.scrollY;
            }, 100);
        }
    });
}



function makeTitleSA(){
    const textBox = document.querySelector('.title-box');

    if(textBox.getBoundingClientRect().top - window.innerHeight < 0){
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
        }, 1800);
    }
}



function makeIntroSA(){
    const container = document.querySelector('.inner-wrapper.intro');
    const slideContainer = document.querySelector('.screen-carousel-container');
    const frame = document.querySelector('.screen-carousel-frame');
    const moveLength = document.querySelector('.screen-carousel-frame').clientWidth;
    const contentsWrapper = document.querySelector('.screen-carousel-contents');
    const count = 4;
    const msec = 800;
    let nowIdx = 1;


    if(container.getBoundingClientRect().top - window.innerHeight < 0 && nowIdx == 1){
        container.style.transition = '.8s';

        container.classList.remove('opacity-zero');
        // setTimeout(() => {
        //     slideContents(contentsWrapper, moveLength, count, msec, nowIdx);
        // }, 800);

        // window.addEventListener('resize', () => {
        //     contentsWrapper.style.transform = `translateX(-${moveLength*nowIdx}px)`;
            
        //     setTimeout(() => {
        //         //이미지 뒤로 펼치기
        //     }, msec*count);
        // })
    }


}



function slideContents(wrapper, moveLength, count, msec, nowIdx){
    const contentsWrapper = wrapper;

    contentsWrapper.style.transition = '.5s'

    contentsWrapper.style.transform = `translateX(-${moveLength*nowIdx}px)`;

    if(++nowIdx < count){
        setTimeout(() => {
            slideContents(wrapper, moveLength, count, msec, nowIdx);
        }, msec);
    }
}

    