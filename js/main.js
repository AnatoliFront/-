// pop-up
    var modal = document.getElementById("pop-up-wrapper");
    var close = document.getElementById("close");
    function popup() {
    modal.style.display = "block";
 }
    close.onclick = function(){
         modal.style.display = "none";
    }

const qs = (selector) => document.querySelector(selector)
const qsa = (selector) => document.querySelectorAll(selector)


document.addEventListener("DOMContentLoaded", function() {
    new Splide( '.splide.certificate-image-mobile', {
        type: 'loop',
        arrowPath: 'M32.7767 34.0693L7.13022 60.7275C5.49879 62.4242 2.85371 62.4242 1.22308 60.7275C-0.407692 59.0324 -0.407692 56.283 1.22308 54.588L23.9163 30.9996L1.22374 7.41195C-0.407032 5.71612 -0.407032 2.96703 1.22374 1.27188C2.8545 -0.423959 5.49945 -0.423959 7.13088 1.27188L32.7774 27.9305C33.5928 28.7785 34 29.8887 34 30.9994C34 32.1107 33.592 33.2217 32.7767 34.0693Z',
    } ).mount();

    new Splide( '.splide-3-1', {
        type      : 'loop',
        pagination: true,
        perPage: 1,
        breakpoints: {
            738: {
                pagination: true,
                perPage: 1,

            }
        },
        arrowPath: 'M32.7767 34.0693L7.13022 60.7275C5.49879 62.4242 2.85371 62.4242 1.22308 60.7275C-0.407692 59.0324 -0.407692 56.283 1.22308 54.588L23.9163 30.9996L1.22374 7.41195C-0.407032 5.71612 -0.407032 2.96703 1.22374 1.27188C2.8545 -0.423959 5.49945 -0.423959 7.13088 1.27188L32.7774 27.9305C33.5928 28.7785 34 29.8887 34 30.9994C34 32.1107 33.592 33.2217 32.7767 34.0693Z',
    
    }).mount();
    // new Splide( '.splide-3-2', {
    //     type      : 'loop',
    //     pagination: false,
    //     perPage: 2,
    //     breakpoints: {
    //         738: {
    //             pagination: true,
    //             perPage: 1,

    //         }
    //     },
    //     arrowPath: 'M32.7767 34.0693L7.13022 60.7275C5.49879 62.4242 2.85371 62.4242 1.22308 60.7275C-0.407692 59.0324 -0.407692 56.283 1.22308 54.588L23.9163 30.9996L1.22374 7.41195C-0.407032 5.71612 -0.407032 2.96703 1.22374 1.27188C2.8545 -0.423959 5.49945 -0.423959 7.13088 1.27188L32.7774 27.9305C33.5928 28.7785 34 29.8887 34 30.9994C34 32.1107 33.592 33.2217 32.7767 34.0693Z',
    
    // }).mount();
    
    new Splide( '.splide-2', {
        type      : 'loop',
        arrowPath: 'M32.7767 34.0693L7.13022 60.7275C5.49879 62.4242 2.85371 62.4242 1.22308 60.7275C-0.407692 59.0324 -0.407692 56.283 1.22308 54.588L23.9163 30.9996L1.22374 7.41195C-0.407032 5.71612 -0.407032 2.96703 1.22374 1.27188C2.8545 -0.423959 5.49945 -0.423959 7.13088 1.27188L32.7774 27.9305C33.5928 28.7785 34 29.8887 34 30.9994C34 32.1107 33.592 33.2217 32.7767 34.0693Z',
        perPage: 3,
        pagination: false,
        arrows: true,
        gap: '2em',
        breakpoints: {
            1920: {
                type: 'slide',
            },
            768: {
                perPage: 1,
                type: 'loop',
                pagination: true,
                arrows: true,
                gap: '4em',
                arrowPath: 'M32.7767 34.0693L7.13022 60.7275C5.49879 62.4242 2.85371 62.4242 1.22308 60.7275C-0.407692 59.0324 -0.407692 56.283 1.22308 54.588L23.9163 30.9996L1.22374 7.41195C-0.407032 5.71612 -0.407032 2.96703 1.22374 1.27188C2.8545 -0.423959 5.49945 -0.423959 7.13088 1.27188L32.7774 27.9305C33.5928 28.7785 34 29.8887 34 30.9994C34 32.1107 33.592 33.2217 32.7767 34.0693Z',
            }
        }
    }).mount();
    
    var secondarySlider = new Splide( '.secondary-slider', {
		fixedWidth  : 100,
		height      : 60,
		gap         : 10,
		cover       : true,
        isNavigation: true,
        type: 'loop',
        focus       : 'center',
        pagination  : false,
        arrowPath: 'M32.7767 34.0693L7.13022 60.7275C5.49879 62.4242 2.85371 62.4242 1.22308 60.7275C-0.407692 59.0324 -0.407692 56.283 1.22308 54.588L23.9163 30.9996L1.22374 7.41195C-0.407032 5.71612 -0.407032 2.96703 1.22374 1.27188C2.8545 -0.423959 5.49945 -0.423959 7.13088 1.27188L32.7774 27.9305C33.5928 28.7785 34 29.8887 34 30.9994C34 32.1107 33.592 33.2217 32.7767 34.0693Z',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
	} ).mount();
	
	var primarySlider = new Splide( '.primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();

    const scaleButtons = qsa('.certificate-image .img_container')
    const popup = qs('.popup-container')
    const popupImg = qs('#popupImg')
    const imgCont = qs('.popup-image')
    scaleButtons.forEach(i => {
        i.addEventListener('click', function(e) {
        
            const src = i.querySelector('img').getAttribute('src')
           
            
           
            imgCont.setAttribute('data-id', i.dataset.id)
            popupImg.setAttribute('src', src);
            popup.classList.add('active')
        })
    })
    const popupBg = qs('.popup-bg')
    popupBg.addEventListener('click', function(e){
        popup.classList.remove('active')
    }) 

    const popupNextButton = qs('.popup-prev')
    const popupPrevButton = qs('.popup-next')

    popupNextButton.addEventListener('click', function() {
        let id = qs('.popup-image').dataset.id
        id >= 2 ? id = 0 : id++
        let src = ""
        console.log(id)
        scaleButtons.forEach(e => {
            console.log(e.querySelector('img'))
            if(e.dataset.id == id) {
                const img = e.querySelector('img')
                console.log(img)
                src = img.getAttribute('src')
            }
        })
        popupImg.setAttribute('src', src)
        imgCont.setAttribute('data-id', id)
        console.log(src)

    })
    popupPrevButton.addEventListener('click', function() {
        let id = qs('.popup-image').dataset.id
        id <= 0 ? id = 2 : id--
        let src = ""
        scaleButtons.forEach(e => {
            if(e.dataset.id == id) {
                src = e.querySelector('img').getAttribute('src')
            }
        })
        popupImg.setAttribute('src', src) 
        imgCont.setAttribute('data-id', id)
    })

    var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = .2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                
                window.scrollTo(0,r-120);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
})
