fromLocalstorage()

function fromLocalstorage(){
    const control = localStorage.getItem("counter");
    console.log(control)
    
    if(control != 0) {
        document.getElementById("counter").innerHTML = localStorage.getItem("counter");
    }
    else{
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