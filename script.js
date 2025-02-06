const backButton = document.createElement('button');
backButton.textContent = 'Retour au menu principal';
backButton.id = 'backButton';
backButton.style.position = 'fixed';
backButton.style.top = '10px';
backButton.style.left = '10px';
backButton.class = "btn";
document.body.appendChild(backButton);

backButton.onclick=function(){
    location.href="https://melvin-nsi.github.io/Site_NSI/"
    };
