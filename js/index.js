makeScrollAnimation();

makeTitleSA();
makeIntroSA();
makeSearchSA();
makeAchievementSA();
makeCharacterSA();
makeHighlightSA();
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
                makeHighlightSA();
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
        const backImg = document.querySelector('.screen-contents'); 
        const contentsContainer = document.querySelector('.screen-carousel-container');
        const contentsWrapper = document.querySelector('.screen-carousel-contents');
        const count = 4;  //슬라이드 콘텐츠 개수
        const msec = 800;
        let moveLength = 296;   //pc사이즈의 목업 width
        let nowIdx = count-1;   //인덱스 0부터 시작
        let timeChecker = false;

        for(let i = 0; i < contentsWrapper.children.length; i++)
            contentsWrapper.children[i].style.transition = '.8s';
      

        //섹션 컨텐츠 SA
        showSectionSA(container);

        //목업 화면 자동 슬라이드
        let screen = setInterval(() => {
            contentsWrapper.children[nowIdx].style.transform = `translateX(-${moveLength}px)`;

            if(--nowIdx === 0){
                clearInterval(screen);
            }
        }, msec);


        //스크린 이미지 뒤로 펼치기
        setTimeout(() => {
            for(let i = 0; i < backImg.children.length; i++){
                contentsContainer.style.transition = '.8s';
                backImg.children[i].style.transition = '.8s';

                if(window.innerWidth >= 1280){
                    backImg.children[i].style.transform = `translateX(-${200 - 60 * i}px)`; 
                }else if(window.innerWidth < 1280 && window.innerWidth >= 1024){
                    backImg.children[i].style.transform = `translateX(-${130 - 40 * i}px)`;
                }else if(window.innerWidth < 1024 && window.innerWidth >= 768){
                    contentsContainer.style.transform = `translateX(150px)`; 
                    backImg.children[i].style.transform = `translateX(-${300 - 100 * i}px)`;
                }else if(window.innerWidth < 768 && window.innerWidth >= 480){
                    contentsContainer.style.transform = `translateX(90px)`;
                    backImg.children[i].style.transform = `translateX(-${190 - 60 * i}px)`; 
                }else if(window.innerWidth < 480){
                    contentsContainer.style.transform = `translateX(60px)`;
                    backImg.children[i].style.transform = `translateX(-${130 - 40 * i}px)`; 
                }

                backImg.children[i].addEventListener('click', () => {
                    for(let j = 1; j < contentsWrapper.children.length; j++){
                        contentsWrapper.children[j].style.transition = 'none';
                        contentsWrapper.children[j].style.transform = `translateX(-${moveLength}px)`;
                    }
                        
                    contentsWrapper.children[i + 1].style.transform = `translateX(0)`;
                });
            }


            timeChecker = true;
        }, msec*(count-1));


        //반응형
        window.addEventListener('resize', () => {
            if(timeChecker){
                for(let i = 0; i < backImg.children.length; i++){
                    if(window.innerWidth >= 1280){
                        contentsContainer.style.transform = `translateX(0)`; 
                        backImg.children[i].style.transform = `translateX(-${200 - 60 * i}px)`;
                    }else if(window.innerWidth < 1280 && window.innerWidth >= 1024){
                        contentsContainer.style.transform = `translateX(0)`; 
                        backImg.children[i].style.transform = `translateX(-${130 - 40 * i}px)`;
                    }else if(window.innerWidth < 1024 && window.innerWidth >= 768){
                        contentsContainer.style.transform = `translateX(150px)`;
                        backImg.children[i].style.transform = `translateX(-${300 - 100 * i}px)`;
                    }else if(window.innerWidth < 768 && window.innerWidth >= 480){
                        contentsContainer.style.transform = `translateX(90px)`;
                        backImg.children[i].style.transform = `translateX(-${190 - 60 * i}px)`;
                    }else if(window.innerWidth < 480){
                        contentsContainer.style.transform = `translateX(60px)`;
                        backImg.children[i].style.transform = `translateX(-${130 - 40 * i}px)`;
                    }
                }
            }
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
            for(let i = 0; i < barGraph.children.length; i++){
                barGraph.children[i].style.transition = '.8s'
                setTimeout(() => {
                    barGraph.children[i].style.height = `${barHeight[i]}px`
                }, 100 * i);
            }
        }, 100);

        container.classList.remove('checker');
    }
    
}


function makeCharacterSA(){
    const container = document.querySelector('.inner-wrapper.character');
    
    if(container.getBoundingClientRect().top - window.innerHeight < -100 && container.classList.contains('checker')){
        const characters = document.querySelector('.characters');

        //섹션 컨텐츠 SA
        showSectionSA(container);

        for(let i = 0; i < characters.children.length; i++){
            characters.children[i].style.transition = '.2s'
            setTimeout(() => {
                characters.children[i].classList.remove('opacity-zero');
            }, 500 * (i + 1));
        }

        container.classList.remove('checker');
    }
    
}

function repeatCirclesMotion(circles, msec){
    for(let i = 0; i < circles.length; i++){
        circles[i].style.transition = '.3s'
        setTimeout(() => {
            if(i > 0){
                circles[i - 1].classList.add('opacity-zero'); 
            }else if(i === 0){
                circles[circles.length - 1].classList.add('opacity-zero'); 
            }
            
            circles[i].classList.remove('opacity-zero');
        }, msec * i);
    } 
}

function makeHighlightSA(){
    const container = document.querySelector('.highlight-area');

    if(container.getBoundingClientRect().top - window.innerHeight < 0 && container.classList.contains('checker')){
        const circles = document.getElementsByClassName('circles');
        const msec = 300;

        repeatCirclesMotion(circles, msec);

        setInterval(() => {
            repeatCirclesMotion(circles, msec);
        }, msec * circles.length);
        

        container.classList.remove('checker');
    }  
}



function makeGoalSA(){
    const container = document.querySelector('.inner-wrapper.goal');
    const imgArea = document.querySelector('.inner-wrapper.goal .img-area');

    if(container.getBoundingClientRect().top - window.innerHeight < -100 && imgArea.classList.contains('checker')){
        const rewards = document.querySelector('.rewards');
        
        //섹션 컨텐츠 SA
        showSectionSA(container);

        if(imgArea.getBoundingClientRect().top - window.innerHeight < -100){
            for(let i = 0; i < rewards.children.length; i++){
                setTimeout(() => {
                    rewards.children[i].classList.remove('opacity-zero');
                }, 400 * (i+1));
            }
            imgArea.classList.remove('checker');
        }
    }   
    
}




    