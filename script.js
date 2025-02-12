const backButton = document.getElementById("home");
backButton.style.position = 'fixed';
backButton.style.top = '10px';
backButton.style.left = '10px';
backButton.class = "btn";

backButton.onclick = function(){
    location.href = "/Site_NSI/";
};
