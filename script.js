const backButton = document.createElement('button');
backButton.textContent = 'Retour au menu principal';
backButton.id = 'backButton';
backButton.style.position = 'fixed';
backButton.style.top = '10px';
backButton.style.left = '10px';
backButton.style.padding = '10px 20px';
backButton.style.backgroundColor = '#4CAF50';
backButton.style.color = 'white';
backButton.style.border = 'none';
backButton.style.borderRadius = '5px';
backButton.style.fontSize = '16px';
backButton.style.cursor = 'pointer';
backButton.style.display = 'none';
document.body.appendChild(backButton);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

backButton.addEventListener('click', scrollToTop);

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backButton.style.display = 'block';
    } else {
        backButton.style.display = 'none';
    }
};
