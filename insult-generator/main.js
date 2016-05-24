var adj1List;
var adj2List;
var nounList;

var adj1Span = document.getElementById("adj1");
var adj2Span = document.getElementById("adj2");
var nounSpan = document.getElementById("noun");

var generateButton = {
    "button":document.getElementById("generate"),
    "hasBeenPressed":false
};

getInsults();

function getInsults() {
    var allInsults = getJSON();
    adj1List = allInsults.insults[0];
    adj2List = allInsults.insults[1];
    nounList = allInsults.insults[2];
    console.log("All lists loaded!");
}

function getJSON() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "insults.json", false);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if(xhr.readystate == 4 && xhr.status == 200) {
            return JSON.parse(xhr.responseText);
        }
    }
}

function generateInsult() {
    console.log("Button pressed!");
    displayInsult(
        adj1List[randomNumber(adj1List.length)],
        adj2List[randomNumber(adj2List.length)],
        nounList[randomNumber(nounList.length)]
    );
}

function displayInsult(adj1, adj2, noun) {
    adj1Span.innerHTML = adj1;
    adj2Span.innerHTML = adj2;
    nounSpan.innerHTML = noun;
    if(generateButton.hasBeenPressed == false) {
        generateButton.hasBeenPressed = true;
        generateButton.value = "Another insult!";
    }
}

//Returns a number between 0 and 'high'
function randomNumber(high) {
    return Math.floor(Math.random() * (high + 1));
}