function showMobileMenu(){
    var navLinks = document.getElementsByClassName('change-control');
    const arrNavLinks = Array.from(navLinks);

    for(let a = 0; a < arrNavLinks.length; a++){
        if(arrNavLinks[a].classList.contains('init-display-mobile')){
            arrNavLinks[a].classList.remove('init-display-mobile');
            document.getElementById('header-logo').style.display = 'none';
        }
        else{
            arrNavLinks[a].classList.add('init-display-mobile');
            document.getElementById('header-logo').style.display = 'block';
        }
    }
}