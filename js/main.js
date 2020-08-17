let username = prompt("what is your name");
document.getElementById("welli").innerHTML="welcome" + " "  + username;


function openBar(){
    document.getElementById("end").style.display ="block";
    document.getElementById("welli").style.display ="none";
}

function closeCross(){
    document.getElementById("end").style.display ="none";
    document.getElementById("bars").style.display ="block";
    document.getElementById("close").innerHTML = "Thank you for waiting" + " ";

}