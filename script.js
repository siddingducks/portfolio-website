//home page
window.onload = function() {
    //set visibility
    document.querySelector("#about").style.display = "block";
    document.querySelector("#experience").style.display = "none";
    document.querySelector("#projects").style.display = "none";
    document.querySelector("#skills").style.display = "none";

    //assign buttons functionality
    document.querySelector("#about-link").addEventListener("click", about);
    document.querySelector("#experience-link").addEventListener("click", experience);
    document.querySelector("#projects-link").addEventListener("click", projects);
    document.querySelector("#skills-link").addEventListener("click", skills);
};

function about() {
    document.querySelector("#about").style.display = "block";
    document.querySelector("#experience").style.display = "none";
    document.querySelector("#projects").style.display = "none";
    document.querySelector("#skills").style.display = "none";
}

function experience() {
    document.querySelector("#about").style.display = "none";
    document.querySelector("#experience").style.display = "block";
    document.querySelector("#projects").style.display = "none";
    document.querySelector("#skills").style.display = "none";
}

function projects() {
    document.querySelector("#about").style.display = "none";
    document.querySelector("#experience").style.display = "none";
    document.querySelector("#projects").style.display = "block";
    document.querySelector("#skills").style.display = "none";
}

function skills(){
    document.querySelector("#about").style.display = "none";
    document.querySelector("#experience").style.display = "none";
    document.querySelector("#projects").style.display = "none";
    document.querySelector("#skills").style.display = "block";
}
