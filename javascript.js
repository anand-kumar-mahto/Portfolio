document.addEventListener('DOMContentLoaded', function() {
    function toggleImage(imgId) {
        var img = document.getElementById(imgId);
        if (img) {
            img.style.display = (img.style.display === "none" || img.style.display === "") ? "block" : "none";
        } else {
            console.error('Image with ID "' + imgId + '" not found.');
        }
    }

    function toggleResume() {
        var resumeContainer = document.getElementById('resume-container');
        if (resumeContainer) {
            resumeContainer.style.display = (resumeContainer.style.display === "none" || resumeContainer.style.display === "") ? "block" : "none";
        } else {
            console.error('Resume container not found.');
        }
    }

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.querySelectorAll('.verify-button').forEach(button => {
        button.addEventListener('click', function() {
            toggleImage(this.previousElementSibling.id);
        });
    });

    document.querySelectorAll('.resume-button').forEach(button => {
        button.addEventListener('click', function() {
            toggleResume();
        });
    });
});
