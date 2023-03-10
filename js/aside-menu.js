var listItems = document.getElementsByClassName('main-menu-aside-nav-list-options');

function changeBG(listOption){
    this.clearBG();
    listOption.style.backgroundColor = '#FF934F'
}

function clearBG(){
    for(var i = 0; i < listItems.length; i++) {
        var listOption = listItems[i];
        listOption.style.backgroundColor = '#575A5E';
    }
}