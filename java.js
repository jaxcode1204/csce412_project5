function changeStyle(){
    
    let theme = document.getElementById("theme");

    if(theme.getAttribute('href') == 'style1.css'){
        theme.setAttribute('href','style2.css');
    }
    else{
        theme.setAttribute('href','style1.css');
    }
    
    localStorage.setItem('currentStyleSheet',theme.getAttribute('href'));
}
window.onload = function(){
    var filename = localStorage.getItem('currentStyleSheet');

    const id = document.getElementById('theme');

    if(filename){
        id.setAttribute('href',filename);
    }
}