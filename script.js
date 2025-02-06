const backButton = document.createElement('button');
backButton.textContent = 'Retour au menu principal';
backButton.id = 'backButton';
backButton.style.position = 'fixed';
backButton.style.top = '10px';
backButton.style.left = '10px';
document.body.appendChild(backButton);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

backButton.onclick=function(){location.href="https://melvin-nsi.github.io/Site_NSI/"};

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backButton.style.display = 'block';
    } else {
        backButton.style.display = 'none';
    }
};