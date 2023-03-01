function showOrHideNavigarion() {
    var display = navigationIsDisplay();
    if (display === "block"){
        document.getElementById('menu').style.display ="none"
        document.getElementById('main').style.width ="100%"
    }
    else{
        document.getElementById('menu').style.display ="block"
        document.getElementById('main').style.width ="75%"
    }
}

function navigationIsDisplay(){
    
    var element = document.getElementById('menu');
    style = window.getComputedStyle(element);
    return style.getPropertyValue('display');
}