//create variables
let about, experience, projects, skills;
let aboutLink, experienceLink, projectsLink, skillsLink;

document.addEventListener("DOMContentLoaded", function() {
    //assign values variables
    about = document.getElementById("about");
    experience = document.getElementById("experience");
    projects = document.getElementById("projects");
    skills = document.getElementById("skills");

    aboutLink = document.getElementById("about-link");
    experienceLink = document.getElementById("experience-link");
    projectsLink = document.getElementById("projects-link");
    skillsLink = document.getElementById("skills-link");

    //set visibility for home page
    about.style.display = "block";
    experience.style.display = "none";
    projects.style.display = "none";
    skills.style.display = "none";

    //style landing page link
    aboutLink.style.color = "#d4b15c";

    //assign links functionality
    aboutLink.addEventListener("click", clickAbout, false);
    experienceLink.addEventListener("click", clickExperience, false);
    projectsLink.addEventListener("click", clickProjects, false);
    skillsLink.addEventListener("click", clickSkills, false);
});

function clickAbout(event) {
    //display the about section only
    about.style.display = "block";
    about.classList.add("fade-in-text");

    experience.style.display = "none";
    projects.style.display = "none";
    skills.style.display = "none";

    //style links accordingly
    linkStyler("about");

    //prevent default scrollling behavior
    event.preventDefault();
}

function clickExperience(event) {
    //display the experience section only  
    experience.style.display = "block";
    experience.classList.add("fade-in-text");

    about.style.display = "none";
    projects.style.display = "none";
    skills.style.display = "none";

    //style links accordingly
    linkStyler("experience");

    //prevent default scrollling behavior
    event.preventDefault();
}

function clickProjects(event) {
    //display the projects section only
    projects.style.display = "block";
    projects.classList.add("fade-in-text");

    about.style.display = "none";
    experience.style.display = "none";
    skills.style.display = "none";

    //style links accordingly
    linkStyler("projects");

    //prevent default scrollling behavior
    event.preventDefault();
}

function clickSkills(){
    //display the skills section only  
    skills.style.display = "block";
    skills.classList.add("fade-in-text");
    
    about.style.display = "none";
    experience.style.display = "none";
    projects.style.display = "none";

    //style links accordingly
    linkStyler("skills");

    //prevent default scrollling behavior
    event.preventDefault();
}

function linkStyler(section) {
    aboutLink.setAttribute('style', 'color: #FFFFFF !important');
    experienceLink.setAttribute('style', 'color: #FFFFFF !important');
    projectsLink.setAttribute('style', 'color: #FFFFFF !important');
    skillsLink.setAttribute('style', 'color: #FFFFFF !important');

    if (section == "about") {
        aboutLink.style.color = "#d4b15c";
    }
    else if (section == "experience") {
        experienceLink.style.color = "#d4b15c";
    }
    else if (section == "projects") {
        projectsLink.style.color = "#d4b15c";
    }
    else {
        //if section == "skills"
        skillsLink.style.color = "#d4b15c";
    }
}
