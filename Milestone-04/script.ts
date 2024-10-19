const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const number = (document.getElementById('number') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name: </b><span contenteditable="true">${name}</span></p>
    <p><b>Father Name: </b><span contenteditable="true">${fathername}</span></p>
    <p><b>Email: </b><span contenteditable="true">${email}</span></p>
    <p><b>Phone Number: </b><span contenteditable="true">${number}</span></p>

    <h3><b>Education</b></h3>
    <p <span contenteditable="true">>Education: ${education}</span></p>

    <h3><b>Experience</b></h3>
    <p <span contenteditable="true">>Experience: ${experience}</span></p>
    
    <h3><b>Skills</b></h3>
    <p <span contenteditable="true">>Skills: ${skills}</span></p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error(`The Resume Display Element Is Missing`);
    }
    console.log('Form submitted');
});
