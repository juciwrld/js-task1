function check1(){
    let q1;
    q1 = document.getElementById("question2").checked;

    if (q1 == true ){
        document.getElementById("qst1").innerHTML = " &#10004 Correct! Attempt next question.";
        document.getElementById("qst1").style.color ="green";
    }
    else{
        document.getElementById("qst1").innerHTML="&#10060 Incorrect Try again";
        document.getElementById("qst1").style.color="white";

    }

}
function check2(){
    let q2;
    q2 = document.getElementById("question8").checked;

    if(q2 == true){
        document.getElementById("qst2").innerHTML ="&#10004 Correct! Attempt next question.";
        document.getElementById("qst2").style.color ="green";

    }

    else{
        document.getElementById("qst2").innerHTML ="&#10060 Incorrect! Try again";
        document.getElementById("qst2").style.color ="white";
    }

}

function check3(){
    let q3
    q3 = document.getElementById("question11").checked;

    if (q3== true ){
        document.getElementById("qst3").innerHTML = " &#10004 Correct! Attempt next question.";
        document.getElementById("qst3").style.color ="green";
    }
    else{
        document.getElementById("qst3").innerHTML="&#10060 Incorrect! Try again";
        document.getElementById("qst3").style.color="white";

    }

}
function check4(){
    let q4
    q4 = document.getElementById("question27").checked;

    if (q4 == true ){
        document.getElementById("qst4").innerHTML = " &#10004 Correct! Attempt next question.";
        document.getElementById("qst4").style.color ="green";
    }
    else{
        document.getElementById("qst4").innerHTML="&#10060 Incorrect!  Try again";
        document.getElementById("qst4").style.color="white";

    }

}
function check5(){
    let q5
    q5 = document.getElementById("question22").checked;

    if (q5 == true ){
        document.getElementById("qst5").innerHTML = " &#10004 Correct! Attempt next question.";
        document.getElementById("qst5").style.color ="green";
    }
    else{
        document.getElementById("qst5").innerHTML="&#10060 Incorrect! Try again ";
        document.getElementById("qst5").style.color="white";

    }

}