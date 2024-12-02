function showHome() {
    document.getElementById("main").style.display = 'grid';
    document.getElementById("profile").style.display = 'none';
    document.getElementById("especial").style.display = 'none';
}

function showAbout() {
    document.getElementById("main").style.display = 'none';
    document.getElementById("profile").style.display = 'grid';
    document.getElementById("especial").style.display = 'none';
}

function showEspecial() {
    document.getElementById("main").style.display = 'none';
    document.getElementById("profile").style.display = 'none';
    document.getElementById("especial").style.display = 'grid';
}