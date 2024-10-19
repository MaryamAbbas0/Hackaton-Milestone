var from = document.getElementById('resume-form');
var resumedisplay = document.getElementById('resume-display');
from.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name: </b>".concat(name, "</p>\n    <p><b>Father Name: </b>").concat(fathername, "</p>\n    <p><b>Email: </b>").concat(email, "</p>\n    <p><b>Phone Number: </b>").concat(number, "</p>\n\n    <h3><b>Education</b></h3>\n    <p>Education: ").concat(education, "</p>\n\n    <h3><b>Experience</b></h3>\n    <p>Experience: ").concat(experience, "</p>\n    \n    <h3><b>Skills</b></h3>\n    <p>Skills: ").concat(skills, "</p>\n    ");
    if (resumedisplay) {
        resumedisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume Display Element Is Missing");
    }
    console.log('Form submitted');
});
