document.getElementById("counter").innerHTML = 0;
fromLocalstorage()

function fromLocalstorage(){
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
  
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