const Myform = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// const form = document.getElementById("resume-form") as HTMLFormElement
// const displayElement = document.getElementById("resume-display") as HTMLDivElement

Myform.addEventListener("submit",(event:Event)=>{
event.preventDefault()

let name= (document.getElementById("name") as HTMLInputElement)
let email= (document.getElementById("email") as HTMLInputElement)
let phone= (document.getElementById("phone") as HTMLInputElement)
let education= (document.getElementById("education") as HTMLInputElement)
let experience= (document.getElementById("experience") as HTMLInputElement)
let skills= (document.getElementById("skills") as HTMLInputElement)

let MyHtmlresume = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name.value}</p>
<p><b>Email:</b>${email.value}</p>
<p><b>Phone:</b>${phone.value}</p>

<h3>Education</h3>
<p>${education.value}</p>

<h3>Expeirence</h3>
<p>${experience.value}</p>

<h3>Skills</h3>
<p>${skills.value}</p>
`;

if(resumedisplayElement){
    resumedisplayElement.innerHTML = MyHtmlresume;
}
else{
    console.error("kindly filled all required field");
    
}

})