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
    const contentsWrapper = document.querySelector('.screen-carousel-contents');
    const count = 4;  //슬라이드 콘텐츠 개수
    const msec = 800;
    let moveLength = 296;   //pc사이즈의 목업 width
    let nowIdx = count-1;   //인덱스 0부터 시작
    let abc;


    if(container.getBoundingClientRect().top - window.innerHeight < 0){
        //transition 설정
        container.style.transition = '.8s';
        for(let i = 0; i < contentsWrapper.children.length; i++){
            contentsWrapper.children[i].style.transition = '.8s';
        }        

        //섹션 컨텐츠 SA
        container.classList.remove('opacity-zero');

        //목업 화면 자동 슬라이드
        setTimeout(() => {
            abc = setInterval(() => {
                contentsWrapper.children[nowIdx].style.transform = `translateX(-${moveLength}px)`;
                setTimeout(() => {
                }, msec);

                if(--nowIdx === 0){
                    clearInterval(abc);
                }
            }, msec);
        }, msec);

        window.addEventListener('resize', () => {

            
            
            setTimeout(() => {
                //이미지 뒤로 펼치기
            }, msec*count);
        })
    }


}




    