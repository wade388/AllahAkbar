document.getElementById('details-btn').addEventListener('click', function () {
    document.getElementById('programPopup').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('programPopup').style.display = 'none';
});

window.addEventListener('click', function (event) {
    const popup = document.getElementById('programPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});