var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Father Name: </b><span contenteditable=\"true\">").concat(fathername, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone Number: </b><span contenteditable=\"true\">").concat(number, "</span></p>\n\n    <h3><b>Education</b></h3>\n    <p <span contenteditable=\"true\">>Education: ").concat(education, "</span></p>\n\n    <h3><b>Experience</b></h3>\n    <p <span contenteditable=\"true\">>Experience: ").concat(experience, "</span></p>\n    \n    <h3><b>Skills</b></h3>\n    <p <span contenteditable=\"true\">>Skills: ").concat(skills, "</span></p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume Display Element Is Missing");
    }
    console.log('Form submitted');
});
