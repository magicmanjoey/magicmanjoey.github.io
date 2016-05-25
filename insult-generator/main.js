var adj1List;
var adj2List;
var nounList;

var thySpan = document.getElementById("thy");
var adj1Span = document.getElementById("adj1");
var adj2Span = document.getElementById("adj2");
var nounSpan = document.getElementById("noun");

var adj1Input = document.getElementById("adj1in");
var adj2Input = document.getElementById("adj2in");
var nounInput = document.getElementById("nounin");

var adj1Button = document.getElementById("adj1button");
var adj2Button = document.getElementById("adj2button");
var nounButton = document.getElementById("nounbutton");

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
    return JSON.parse("{\"insults\":[[\"artless\",\"bawdy\",\"beslubbering\",\"bootless\",\"churlish\",\"cockered\",\"clouted\",\"craven\",\"currish\",\"dankish\",\"dissembling\",\"droning\",\"errant\",\"fawning\",\"fobbing\",\"froward\",\"frothy\",\"gleeking\",\"goatish\",\"gorbellied\",\"impertinent\",\"infectious\",\"jarring\",\"loggerheaded\",\"lumpish\",\"mammering\",\"mangled\",\"mewling\",\"paunchy\",\"pribbling\",\"puking\",\"puny\",\"qualling\",\"rank\",\"reeky\",\"roguish\",\"ruttish\",\"saucy\",\"spleeny\",\"spongy\",\"surly\",\"tottering\",\"unmuzzled\",\"vain\",\"venomed\",\"villainous\",\"warped\",\"wayward\",\"weedy\",\"yeasty\"],[\"base-court\",\"bat-fowling\",\"beef-witted\",\"beetle-headed\",\"boil-brained\",\"clapper-clawed\",\"clay-brained\",\"common-kissing\",\"crook-pated\",\"dismal-dreaming\",\"dizzy-eyed\",\"doghearted\",\"dread-bolted\",\"earth-vexing\",\"elf-skinned\",\"fat-kidneyed\",\"fen-sucked\",\"flap-mouthed\",\"fly-bitten\",\"folly-fallen\",\"fool-born\",\"full-gorged\",\"guts-griping\",\"half-faced\",\"hasty-witted\",\"hedge-born\",\"hell-hated\",\"idle-headed\",\"ill-breeding\",\"ill-nurtured\",\"knotty-pated\",\"milk-livered\",\"motley-minded\",\"onion-eyed\",\"plume-plucked\",\"pottle-deep\",\"pox-marked\",\"reeling-ripe\",\"rough-hewn\",\"rude-growing\",\"rump-fed\",\"shard-borne\",\"sheep-biting\",\"spur-galled\",\"swag-bellied\",\"tardy-gaited\",\"tickle-brained\",\"toad-spotted\",\"unchin-snouted\",\"weather-bitten\"],[\"apple-john\",\"baggage\",\"barnacle\",\"bladder\",\"boar-pig\",\"bugbear\",\"bum-bailey\",\"canker-blossom\",\"clack-dish\",\"clotpole\",\"coxcomb\",\"codpiece\",\"death-token\",\"dewberry\",\"flap-dragon\",\"flax-wench\",\"flirt-gill\",\"foot-licker\",\"fustilarian\",\"giglet\",\"gudgeon\",\"haggard\",\"harpy\",\"hedge-pig\",\"horn-beast\",\"hugger-mugger\",\"joithead\",\"lewdster\",\"lout\",\"maggot-pie\",\"malt-worm\",\"mammet\",\"measle\",\"minnow\",\"miscreant\",\"moldwarp\",\"mumble-news\",\"nut-hook\",\"pigeon-egg\",\"pignut\",\"puttock\",\"pumpion\",\"ratsbane\",\"scut\",\"skainsmate\",\"strumpet\",\"varlot\",\"vassal\",\"whey-face\",\"wagtail\"]]}")
    /*xhr = new XMLHttpRequest();
    xhr.open("GET", "insults.json", true);
    xhr.send();
    
    while(!(xhr.readystate == 4 && xhr.status == 200)) {}
    
    return JSON.parse(xhr.responseText);*/
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
    thySpan.innerHTML = "Thy ";
    adj1Span.innerHTML = adj1 + ", ";
    adj2Span.innerHTML = adj2 + " ";
    nounSpan.innerHTML = noun + "!";
    if(generateButton.hasBeenPressed == false) {
        generateButton.hasBeenPressed = true;
        generateButton.button.value = "Another insult!";
    }
}

//Returns a number between 0 and 'high'
function randomNumber(high) {
    return Math.floor(Math.random() * (high + 1));
}

function addInsult(buttonClicked) {
    if (buttonClicked.id == "adj1button") {
        var insultVal = adj1Input.value;
        if(insultVal != "" && insultVal != null && !(searchArray(adj1List, insultVal))) {
            adj1List.push(adj1Input.value);
            adj1Input.value = "Insult added!"; 
        } else if (searchArray(adj1List, insultVal)) {
            adj1Input.value = "Insult already exists!";
        } else {
            adj1Input.value = "Problem... Try again!";
        }
    } else if (buttonClicked.id == "adj2button") {
        var insultVal = adj2Input.value;
        if(insultVal != "" && insultVal != null && !(searchArray(adj2List, insultVal))) {
            adj2List.push(adj2Input.value);
            adj2Input.value = "Insult added!"; 
        } else if (searchArray(adj2List, insultVal)) {
            adj2Input.value = "Insult already exists!";
        } else {
            adj2Input.value = "Problem... Try again!";
        }
    } else if (buttonClicked.id == "nounbutton") {
        var insultVal = nounInput.value;
        if(insultVal != "" && insultVal != null && !(searchArray(nounList, insultVal))) {
            nounList.push(nounInput.value);
            nounInput.value = "Insult added!"; 
        } else if (searchArray(nounList, insultVal)) {
            nounInput.value = "Insult already exists!";
        } else {
            nounInput.value = "Problem... Try again!";
        }
    }
}

function clearInput(input) {
    if(input.value == "Input insult here!" || input.value == "Insult added!" || input.value == "Problem... Try again!") {
        input.value = "";
    }
}

function keyPressed(event, button) {
    if (event.which == 13 || event.keyCode == 13) {
        addInsult(button);
        return false;
    }
    return true;
}

function searchArray(array, searchTerm) {
    for (item in array) {
        if(searchTerm == item) {
            return true;
        }
    }
    return false;
}