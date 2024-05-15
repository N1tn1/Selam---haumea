const today = new Date();
const thisYear = today.getFullYear();
const copyRightElement = document.querySelector('h1');
const copyRight = copyRightElement.textContent; 
let footer = document.createElement('footer');
footer.innerHTML = "\u00A9" + copyRight + " " + thisYear + "." + " " +  "All Rights Reserved";
document.body.appendChild(footer);
const skills = ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Adobe Photoshop", "GitHub"];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');
for(let i = 0; i < skills.length; i++)
{
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}
