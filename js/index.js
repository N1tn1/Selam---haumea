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
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function(event)
{
    event.preventDefault();
    const formElement = event.target;

//const userName = messageForm.querySelector('[name="usersName"]').value;
//const userEmail = messageForm.querySelector('[name="usersEmail"]').value;
//const userMessage = messageForm.querySelector('[name="usersMessage"]').value;

    const userName = event.target.querySelector('[name="usersName"]').value;
    const userEmail = event.target.querySelector('[name="usersEmail"]').value;
    const userMessage = event.target.querySelector('[name="usersMessage"]').value;
    
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = '<a href="mailto:' + userEmail + '">' + userName + '</a> <span>' + userMessage + '</span>';

    const editButton = document.createElement('button');
    editButton.innerText = "Edit";
    editButton.type = "button";
    editButton.addEventListener('click', function(event)
    {
        const messageContent = newMessage.querySelector('span');
        const updatedMessage = prompt("Enter new message:", messageContent.innerText);
        if(updatedMessage !== null)
        {
            messageContent.innerText = updatedMessage;
        }
    });

    const removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', function(event)
    {
        const entry = event.target.parentNode;
        entry.remove();
        updateMessagesVisibility();
    });

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    updateMessagesVisibility();

    messageForm.reset();
});

function updateMessagesVisibility() 
{
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    if (messageList.children.length === 0) 
    {
        messageSection.style.display = 'none';
    } 
    else 
    {
        messageSection.style.display = 'block';
    }
}
const projectSection = document.getElementById('Projects');
const projectList = projectSection.querySelector('ul');

fetch('https://api.github.com/users/N1tn1/repos')
.then(response => response.json())
.then(repos => {
    const repositories = repos;
    for(let i = 0; i < repositories.length; i++)
    {
        const project = document.createElement('li');
        project.textContent = repositories[i].name;
        projectList.appendChild(project);

    }
})
  .catch(error => console.error('Error fetching repositories:', error));
    
 
        
    
    