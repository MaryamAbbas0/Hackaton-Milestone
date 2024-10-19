var toggleButton = document.getElementById('toggle-skill');
var skillsList = document.getElementById('skill-list');
// Initial display setup
skillsList.style.display = 'none'; // Skills list ko initially chhupana
toggleButton.addEventListener('click', function () {
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block';
        toggleButton.innerHTML = "<b>Hide Skills</b>"; // Button text change
    }
    else {
        skillsList.style.display = 'none';
        toggleButton.innerHTML = "<b>Show Skills</b>"; // Button text change
    }
});
