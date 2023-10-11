// In theory you could put all your language/ copy text into a separate file and import it into this file using export and import. That is pretty standard practice so all your text is in one place
//so you can edit everything in one place
//Messages

//Anxiety
var control =
  "You don't have to control your thoughts; you just have to stop letting them control you.";
var confidence =
  "Confidence is not believing that everything will be ok. Its understanding that whatever happens, you will be ok. ";
//Depression
var allBadThings = "All bad things come to an end.";
//Domestic Abuse
var trapped =
  "It is easy to believe you will be trapped forever. You are not doomed to suffer. You can be safe and happy. ";
//Loneliness
var value = "Your value is not based on others inability to see it.";
//Low Self-esteem
var become = "It is not about what you are, it is about what you can become.";

//Self-harm
var healing = "Healing is not a linear process.";
var kindness =
  "The world will not always be kind to you, so be kind to yourself. ";
//Suicide
var better = "Stay and give yourself a chance to make things better.";

//Arrays

var anxiety = [control, confidence];
var depression = [allBadThings];
var domesticAbuse = [trapped];
var loneliness = [value];
var lowSelfEsteem = [become];
var selfHarm = [healing, kindness];
var suicide = [better];

//MICHAELS COMMENTS: you could actually condense all of the following code into using a single function called lets say "displayMessage(issue, message). This function as you can see takes 2 params"
// one being the issue, e.g "anxiety" and the other param being the message itself, e.g anxiety[1]
// the Math.random() thing that you do before each function can also condensed to a single function lets say getRandomMessage(issue). Again a function but this time taking one param called issue. Doing the same thing
//Display Functions
//Anxiety
let anxietyElement = anxiety[Math.floor(Math.random() * anxiety.length)];

function displayAnxietyMessage() {
  document.getElementById("message").innerHTML = anxietyElement;
}

//Depression
let depressionElement =
  depression[Math.floor(Math.random() * depression.length)];

function displayDepressionMessage() {
  document.getElementById("message").innerHTML = depressionElement;
}
//Domestic Abuse
let domesticAbuseElement =
  domesticAbuse[Math.floor(Math.random() * domesticAbuse.length)];

function displayDomesticAbuseMessage() {
  document.getElementById("message").innerHTML = domesticAbuseElement;
}
//Loneliness
let lonelinessElement =
  loneliness[Math.floor(Math.random() * loneliness.length)];

function displayLonelinessMessage() {
  document.getElementById("message").innerHTML = lonelinessElement;
}
//Low Self-esteem
let lowSelfEsteemElement =
  lowSelfEsteem[Math.floor(Math.random() * lowSelfEsteem.length)];

function displayLowSelfEsteemMessage() {
  document.getElementById("message").innerHTML = lowSelfEsteemElement;
}
//Self Harm
let selfHarmElement = selfHarm[Math.floor(Math.random() * selfHarm.length)];

function displaySelfHarmMessage() {
  document.getElementById("message").innerHTML = selfHarmElement;
}
//Suicide
let suicideElement = suicide[Math.floor(Math.random() * suicide.length)];

function displaySuicideMessage() {
  document.getElementById("message").innerHTML = suicideElement;
}
