let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for (let i=0; i < tabsPane.length; i++){
tabsPane[i].addEventListener("click", function(){

    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");

    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");

    tabIndicator.style.left = `calc(calc(100% / 3) * ${i}`
});
}

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
}

window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}

//Email Js

function validate(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let message = document.querySelector('.message')

    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (email.value == "" || name.value == "" || message.value == ""){
            emptyerror()
        } else {
            sendemail(name.value, email.value, message.value);
            success();
            name.value = "";
            email.value = "";
            message.value = "";
        }
    });

}

validate();

function sendemail(name,email,message){
    emailjs.send("service_naeax8p","template_9oupyud",{
        to_name: name,
        from_name: email,
        message: message,
        });
}

function emptyerror(){
    swal({
        title: "Oh no...",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}

function success(){
    swal({
        title: "Email send successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
      });
}

// Header background change on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});

// Scroll top

let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY > 400);
});


//button download
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    console.log("clickk");
    button.classList.add('active');
});

