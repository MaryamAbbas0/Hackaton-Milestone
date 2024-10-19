const toggleButton = document.getElementById('toggle-skill') as HTMLButtonElement;
const skillsList = document.getElementById('skill-list') as HTMLElement;

// Initial display setup
skillsList.style.display = 'none'; // Skills list ko initially chhupana

toggleButton.addEventListener('click', () => {
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block';
        toggleButton.innerHTML = "<b>Hide Skills</b>"; // Button text change
    } else {
        skillsList.style.display = 'none';
        toggleButton.innerHTML = "<b>Show Skills</b>"; // Button text change
    }
});
