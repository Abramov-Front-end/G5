const feedbackSwiper = new Swiper('#feedbackSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    autoplay: true,
    loop: true,
    on: {
        init: swiper => {
            swiper.autoplay.stop()
        }
    },
    navigation: {
        nextEl: '.swiper-button.next',
        prevEl: '.swiper-button.prev',
    }
})

window.addEventListener('load', () => {
    document.querySelector('.site-wrap').classList.add('loaded')
})

const sections = document.querySelectorAll('.section')
window.addEventListener('scroll', () => {
    let windowHeight = window.innerHeight

    sections.forEach(e => {
        const offsetTop = e.getBoundingClientRect().top
        const sectionHeight = e.clientHeight

        if ( offsetTop - windowHeight*0.7 < 0 ) {

            if ( !e.classList.contains('animated') ) {
                e.classList.add('animated')
            }
        } else {

            if ( e.classList.contains('animated') ) {
                e.classList.remove('animated')
            }
        }

        if ( e.classList.contains('section__feedback') ) {

            if ( offsetTop - windowHeight*0.9 < 0 && offsetTop + sectionHeight > 0) {

                if ( !feedbackSwiper.autoplay.running ) feedbackSwiper.autoplay.start()
            } else {

                if ( feedbackSwiper.autoplay.running ) feedbackSwiper.autoplay.stop()
            }
        }
    })
})


