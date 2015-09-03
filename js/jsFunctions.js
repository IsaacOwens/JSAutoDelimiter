function testAlert()
{
	
	alert("jsFunctions.js successfully loaded");
	
};

var inputText = document.getElementById("textBox");
var copiedText = document.getElementById("copied");
var commaButton = document.getElementById("comma");
var commaQuoteButton = document.getElementById("commaQuote");
var commaQuoteNButton = document.getElementById("commaQuoteN");

function delimit(type)
{
	
	switch (type) {
		case 0:
		inputText.value = inputText.value.replace(/(\r\n|\n|\r)/gm,",");
		break;
		case 1:
		inputText.value = inputText.value.replace(/(\r\n|\n|\r)/gm,"','");
		inputText.value = "'" + inputText.value + "'";
		break;
		case 2:
		inputText.value = inputText.value.replace(/(\r\n|\n|\r)/gm,"',N'");
		inputText.value = "N'" + inputText.value + "'";
		break;
	}
	
	commaButton.disabled = true;
	commaQuoteButton.disabled = true;
	commaQuoteNButton.disabled = true;
	inputText.readOnly = true;
	
};


function reset()
{
	inputText.value = "";
	commaButton.disabled = false;
	commaQuoteButton.disabled = false;
	commaQuoteNButton.disabled = false;
	inputText.readOnly = false;
};