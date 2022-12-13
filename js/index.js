makeScrollAnimation();

makeTitleSA();
makeIntroSA();
makeSearchSA();
makeAchievementSA();
makeCharacterSA();
makeGoalSA();










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
                makeSearchSA();
                makeAchievementSA();
                makeCharacterSA();
                makeGoalSA();

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


//섹션 애니메이션(opacity 변화)
function showSectionSA(container){
    container.style.transition = '.8s';
    container.classList.remove('opacity-zero');
}


function makeIntroSA(){
    const container = document.querySelector('.inner-wrapper.intro');

    if(container.getBoundingClientRect().top - window.innerHeight < -100 && container.classList.contains('checker')){
        const contentsWrapper = document.querySelector('.screen-carousel-contents');
        const count = 4;  //슬라이드 콘텐츠 개수
        const msec = 800;
        let moveLength = 296;   //pc사이즈의 목업 width
        let nowIdx = count-1;   //인덱스 0부터 시작
        let screen;

        for(let i = 0; i < contentsWrapper.children.length; i++)
            contentsWrapper.children[i].style.transition = '.8s';
      

        //섹션 컨텐츠 SA
        showSectionSA(container);

        //목업 화면 자동 슬라이드
        screen = setInterval(() => {
            contentsWrapper.children[nowIdx].style.transform = `translateX(-${moveLength}px)`;

            if(--nowIdx === 0){
                clearInterval(screen);
            }
        }, msec);


        window.addEventListener('resize', () => {

            setTimeout(() => {
                //이미지 뒤로 펼치기
            }, msec*count);
        })

        container.classList.remove('checker');
    }
}


function makeSearchSA(){
    const container = document.querySelector('.inner-wrapper.search');

    if(container.getBoundingClientRect().top - window.innerHeight < -100 && container.classList.contains('checker')){
        const frame = document.querySelector('.tag-carousel-frame');
        const count = 5;  //슬라이드 콘텐츠 개수
        const msec = 800;
        let moveLength = frame.clientHeight;   //슬라이드이동 길이
        let nowIdx = 1;   //현재 인덱스
        let screen;

        //섹션 컨텐츠 SA
        showSectionSA(container);


        container.classList.remove('checker');
    }
    
}


function makeAchievementSA(){
    const container = document.querySelector('.inner-wrapper.achievement');

    if(container.getBoundingClientRect().top - window.innerHeight < -100 && container.classList.contains('checker')){
        const barGraph = document.querySelector('.bar-graph');
        let barHeight = [];

        //섹션 컨텐츠 SA
        showSectionSA(container);

        for(let i = 0; i < barGraph.children.length; i++){
            barHeight[i] = barGraph.children[i].clientHeight;  //각 막대의 높이 저장
            barGraph.children[i].style.height = '0'
        }

        setTimeout(() => {
            for(let i = 1; i <= barGraph.children.length; i++){
                barGraph.children[i-1].style.transition = '.8s'
                setTimeout(() => {
                    barGraph.children[i-1].style.height = `${barHeight[i-1]}px`
                }, 200 * i);
            }
        }, 100);

        container.classList.remove('checker');
    }
    
}


function makeCharacterSA(){
    const container = document.querySelector('.inner-wrapper.character');
    
    if(container.getBoundingClientRect().top - window.innerHeight < -100 && container.classList.contains('checker')){
        const msec = 800;

        //섹션 컨텐츠 SA
        showSectionSA(container);

        container.classList.remove('checker');
    }
    
}

function makeGoalSA(){
    const container = document.querySelector('.inner-wrapper.goal');

    if(container.getBoundingClientRect().top - window.innerHeight < -100 && container.classList.contains('checker')){
        const msec = 800;

        //섹션 컨텐츠 SA
        showSectionSA(container);

        container.classList.remove('checker');
    }   
    
}




    