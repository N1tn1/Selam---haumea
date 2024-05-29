// Create a footer element and set its content to the copyright notice and the current year together with name fetched from the h1 element
const today = new Date();
const thisYear = today.getFullYear();
const copyRightElement = document.querySelector('h1');
const copyRight = copyRightElement.textContent; 
let footer = document.createElement('footer');
footer.innerHTML = "\u00A9" + copyRight + " " + thisYear + "." + " " +  "All Rights Reserved";
document.body.appendChild(footer);

// Populate the skills section with the array of skills listed
const skills = ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Adobe Photoshop", "GitHub"];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');
for(let i = 0; i < skills.length; i++)
{
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

// Add event listener to the message form for form submission
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function(event)
{
    event.preventDefault();
    const formElement = event.target;
    const userName = event.target.querySelector('[name="usersName"]').value;
    const userEmail = event.target.querySelector('[name="usersEmail"]').value;
    const userMessage = event.target.querySelector('[name="usersMessage"]').value;
    
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = '<a href="mailto:' + userEmail + '">' + userName + '</a> <span>' + userMessage + '</span>';

    //Create edit and remove buttons for each message
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

// Update visibility of message section depending on message existence
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

// Populate the project section by fetching GitHub repositories
const projectSection = document.getElementById('Projects');
const projectList = projectSection.querySelector('ul');

fetch('https://api.github.com/users/N1tn1/repos')
.then(response => response.json())
.then(repos => {
    const repositories = repos;
    for(let i = 0; i < repositories.length; i++)
    {
        const project = document.createElement('li');
        const repolink = document.createElement('a');
        repolink.href = repositories[i].html_url;
        repolink.textContent = repositories[i].name;
        repolink.target = '_blank';
        project.appendChild(repolink);
        projectList.appendChild(project);

    }
})
  .catch(error => console.error('Error fetching repositories:', error));

  // Function to toggle DarkMode
  function toggleDarkMode() 
{
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// Toggle the visibility of Navigation Menus when Hamburger button is clicked
const hamburgerButton = document.getElementById('hamburger-button');
const navLinks = document.getElementById('nav-links');

    hamburgerButton.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    });

    // Close the menu when user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && event.target !== hamburgerButton) {
            navLinks.classList.remove('show');
        }
    });
    