fromLocalstorage()

function fromLocalstorage(){
    console.log("Hello");
    const num = localStorage.setItem("counter");
    console.log(num);
}

function decreaseNumber(){

    localStorage.setItem("counter", document.getElementById("counter").innerHTML = Number(document.getElementById("counter").innerHTML) - 1);
}

function resetNumber(){
    document.getElementById("counter").innerHTML = 0;
}

function increaseNumber(){
    document.getElementById("counter").innerHTML = Number(document.getElementById("counter").innerHTML) + 1;
}