function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function initializeSlider() {
    const slider = document.querySelector('.slider');
    const container = document.querySelector('.compare-container');

    slider.addEventListener('input', function (e) {
        container.style.setProperty('--position', e.target.value + '%');
    });
}

function loadImages() {
    const file1 = document.querySelector('#imageUpload1').files[0];
    const file2 = document.querySelector('#imageUpload2').files[0];

    if (file1 && file2 && file1.type.startsWith('image/') && file2.type.startsWith('image/')) {
        const imageBefore = document.querySelector('.image-before');
        const imageAfter = document.querySelector('.image-after');

        imageBefore.src = URL.createObjectURL(file1);
        imageAfter.src = URL.createObjectURL(file2);
    } else {
        alert('Please select valid image files.');
    }
}

function setAspectRatio(imageNumber) {
    const imageElement = document.querySelector(`.image-${imageNumber}`);
    const aspectRatio = imageElement.naturalWidth / imageElement.naturalHeight;
    const aspectRatioString = aspectRatio.toString();
    document.querySelector('.image-container').style.setProperty('--aspect-ratio', aspectRatioString);
}

function selectImage(imageNumber) {
    const inputElement = document.querySelector(`#imageUpload${imageNumber}`);
    const file = inputElement.files[0];

    if (file && file.type.startsWith('image/')) {
        if (imageNumber === 1) {
            // Update file1 and file1Selected
        } else {
            // Update file2 and file2Selected
        }

        if (file1Selected && file2Selected) {
            // Enable the "Show Difference" button
        }
    } else {
        alert('Please select valid image files.');
    }
}