var small = document.getElementById('small')
small.addEventListener("click", sizeSmall);

function sizeSmall() {
    document.getElementById('small').style.height = "500px";
    console.log('working')
}

var medium = document.getElementById('medium')
medium.addEventListener("click", sizeMedium);

function sizeMedium() {
    document.getElementById('medium').style.marginTop = "500px";
    console.log('working')
}

var large = document.getElementById('large')
large.addEventListener("click", sizeLarge);

function sizeLarge() {
    document.getElementById('large').style.width = "500px";
    document.getElementById('large').style.fontSize = "75px";
    document.getElementById('large').style.height = "175px";
    document.getElementById('large').style.backgroundColor = "pink";


    console.log('working')
}