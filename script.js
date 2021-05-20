darkMode = () => {
    let checkbox = document.getElementById('checkbox-id');
    if (checkbox.checked == true) {
        mylink = document.getElementById("my-link")
        mylink.setAttribute('href', 'darkmode.css')
    }
    if (checkbox.checked == false) {
        mylink = document.getElementById("my-link")
        mylink.setAttribute('href', 'style.css')
    }
}