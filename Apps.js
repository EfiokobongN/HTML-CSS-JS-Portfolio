const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    //buttom click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace(
                'active-btn',
                '',
            );
            this.className += 'active-btn';
        });
    }
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            //hide other section
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });

    window.onload = function () {
        document
            .getElementById('contact-form')
            .addEventListener('submit', function (event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this).then(
                    function () {
                        alert('SUCCESS!');
                    },
                    function (error) {
                        alert('FAILED...', error);
                    },
                );
            });
    };
}

pageTransitions();

window.onload = function () {
    document
        .getElementById('contact-form')
        .addEventListener('submit', function (event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            // these IDs from the previous steps
            emailjs.sendForm('service_kc1bufc', 'template_gt1qr0f', this).then(
                function () {
                    alert('SUCCESS!');
                },
                function (error) {
                    alert('FAILED...', error);
                },
            );
        });
};

if ($('.text').length == 1) {
    var typed_strings = $('.text-me').text();
    var typed = new Typed('.text', {
        strings: typed_strings.split(', '),
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
}

if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
        strings: typed_strings.split(', '),
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
}
