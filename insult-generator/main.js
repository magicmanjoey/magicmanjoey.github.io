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
    return JSON.parse("{\"insults\":[[\"artless\",\"bawdy\",\"beslubbering\",\"bootless\",\"churlish\",\"cockered\",\"clouted\",\"craven\",\"currish\",\"dankish\",\"dissembling\",\"droning\",\"errant\",\"fawning\",\"fobbing\",\"froward\",\"frothy\",\"gleeking\",\"goatish\",\"gorbellied\",\"impertinent\",\"infectious\",\"jarring\",\"loggerheaded\",\"lumpish\",\"mammering\",\"mangled\",\"mewling\",\"paunchy\",\"pribbling\",\"puking\",\"puny\",\"qualling\",\"rank\",\"reeky\",\"roguish\",\"ruttish\",\"saucy\",\"spleeny\",\"spongy\",\"surly\",\"tottering\",\"unmuzzled\",\"vain\",\"venomed\",\"villainous\",\"warped\",\"wayward\",\"weedy\",\"yeasty\"],[\"base-court\",\"bat-fowling\",\"beef-witted\",\"beetle-headed\",\"boil-brained\",\"clapper-clawed\",\"clay-brained\",\"common-kissing\",\"crook-pated\",\"dismal-dreaming\",\"dizzy-eyed\",\"doghearted\",\"dread-bolted\",\"earth-vexing\",\"elf-skinned\",\"fat-kidneyed\",\"fen-sucked\",\"flap-mouthed\",\"fly-bitten\",\"folly-fallen\",\"fool-born\",\"full-gorged\",\"guts-griping\",\"half-faced\",\"hasty-witted\",\"hedge-born\",\"hell-hated\",\"idle-headed\",\"ill-breeding\",\"ill-nurtured\",\"knotty-pated\",\"milk-livered\",\"motley-minded\",\"onion-eyed\",\"plume-plucked\",\"pottle-deep\",\"pox-marked\",\"reeling-ripe\",\"rough-hewn\",\"rude-growing\",\"rump-fed\",\"shard-borne\",\"sheep-biting\",\"spur-galled\",\"swag-bellied\",\"tardy-gaited\",\"tickle-brained\",\"toad-spotted\",\"unchin-snouted\",\"weather-bitten\"],[\"apple-john\",\"baggage\",\"barnacle\",\"bladder\",\"boar-pig\",\"bugbear\",\"bum-bailey\",\"canker-blossom\",\"clack-dish\",\"clotpole\",\"coxcomb\",\"codpiece\",\"death-token\",\"dewberry\",\"flap-dragon\",\"flax-wench\",\"flirt-gill\",\"foot-licker\",\"fustilarian\",\"giglet\",\"gudgeon\",\"haggard\",\"harpy\",\"hedge-pig\",\"horn-beast\",\"hugger-mugger\",\"joithead\",\"lewdster\",\"lout\",\"maggot-pie\",\"malt-worm\",\"mammet\",\"measle\",\"minnow\",\"miscreant\",\"moldwarp\",\"mumble-news\",\"nut-hook\",\"pigeon-egg\",\"pignut\",\"puttock\",\"pumpion\",\"ratsbane\",\"scut\",\"skainsmate\",\"strumpet\",\"varlot\",\"vassal\",\"whey-face\",\"wagtail\",\"**egg salad sandwich**\"]]}")
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