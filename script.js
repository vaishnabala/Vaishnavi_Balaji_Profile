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

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const iframe = document.getElementById('content-frame');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            iframe.src = `${targetId}.html`;
        });
    });
});