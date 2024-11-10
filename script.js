var Myform = document.getElementById('resume-form');
var resumedisplayElement = document.getElementById('resume-display');
// const form = document.getElementById("resume-form") as HTMLFormElement
// const displayElement = document.getElementById("resume-display") as HTMLDivElement
Myform.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var skills = document.getElementById("skills");
    var MyHtmlresume = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name.value, "</p>\n<p><b>Email:</b>").concat(email.value, "</p>\n<p><b>Phone:</b>").concat(phone.value, "</p>\n\n<h3>Education</h3>\n<p>").concat(education.value, "</p>\n\n<h3>Expeirence</h3>\n<p>").concat(experience.value, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills.value, "</p>\n");
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = MyHtmlresume;
    }
    else {
        console.error("kindly filled all required field");
    }
});
