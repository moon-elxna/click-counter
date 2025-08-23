fromLocalstorage()

function fromLocalstorage(){
    if (localStorage.getItem("counter") !== null) {
        document.getElementById("counter").innerHTML = localStorage.getItem("counter"); 
    } 
    else {
        document.getElementById("counter").innerHTML = 0;
    }
}

function decreaseNumber(){
    localStorage.setItem("counter", document.getElementById("counter").innerHTML = Number(document.getElementById("counter").innerHTML) - 1);
}

function resetNumber(){
    localStorage.setItem("counter", document.getElementById("counter").innerHTML = 0);
}

function increaseNumber(){
    localStorage.setItem("counter", document.getElementById("counter").innerHTML = Number(document.getElementById("counter").innerHTML) + 1);
}