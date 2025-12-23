// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('nav ul li a');

//     links.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             const targetId = link.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             targetSection.scrollIntoView({ behavior: 'smooth' });
//         });
//     });
// });


// script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('nav ul li a');
//     const iframe = document.getElementById('content-frame');

//     links.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             const targetId = link.getAttribute('href').substring(1);
//             iframe.src = `${targetId}.html`;
//         });
//     });
// });




// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section');
//     const titles = {
//         "index": "Greetings!!",
//         "projects": "My Portfolio - Projects",
//         "publications": "My Portfolio - Publications",
//         "blogs": "My Portfolio - Blogs"
//     };

//     window.addEventListener('scroll', () => {
//         let currentSection = 'index'; // Default section

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
//             if (window.scrollY >= sectionTop - sectionHeight / 3) {
//                 currentSection = section.getAttribute('id');
//             }
//         });

//         document.title = titles[currentSection];
//     });
// });



// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const titles = {
        "index": "Greetings!!",
        "projects": "My Portfolio - Projects",
        "publications": "My Portfolio - Publications",
        "blogs": "My Portfolio - Blogs"
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                document.title = titles[sectionId];
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});





document.getElementById('clickText').addEventListener('click', function() {
    const images = document.querySelectorAll('.image-container img');
    let currentIndex = 0;

    function showNextImage() {
        if (currentIndex < images.length) {
            images[currentIndex].style.right = '0';
            currentIndex++;
        }
    }

    showNextImage(); // Show the first image on the first click

    this.addEventListener('click', showNextImage); // Show the next image on subsequent clicks
});