const navbar = document.querySelectorAll(".navbar .navbar-nav li a ");
navbar.forEach((a) => {
    a.addEventListener('click',(e) => {
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
    });
});
const work = document.querySelectorAll(".our-work .lis li");
work.forEach((li) => {
    li.addEventListener('click',(e) => {
        e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active");
        e.target.classList.add("rounded-pill");
    });
});
