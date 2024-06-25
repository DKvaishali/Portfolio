
function animator(classvalue){
       
    let head = document.getElementById('headA');
    head.className = classvalue;

}//toggle icon navbar
let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    

}
//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    //sticky header
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
            {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    });
    let headers = document.querySelector('header');
    headers.classList.toggle('sticky', window.scrollY > 100);


    //remove toggle icon and navbar when click navbar links(scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    function animationes(classvalue){
       
        let heading = document.getElementsByClassName('.heading');
        heading.className = classvalue;

    }
    
}
