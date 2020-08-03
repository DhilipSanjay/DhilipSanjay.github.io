const text = ["Bug Bounty Hunter", "CyberSecurity Enthusiast", "Web Developer", "WebApp Security Enthusiast", "Network Security Enthusiast"]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let mode = 1;
let speed = 250;
// This function will be called when the document loads
(function text_typing()
{
    currentText = text[count];
    if(mode === 1){
        letter = currentText.slice(0, ++index);
        speed = 200;
    }
    else{
        letter = currentText.slice(0, --index);
        speed = 90;
    }

    document.querySelector('.typing').textContent = letter;
    if(letter.length === 0)
    {
        count = (count+1) % text.length;
        index = 0;
        mode = 1;
	speed = 700;
    }
    else if(letter.length === currentText.length)
    {
        mode = 0;
        speed = 2000;
    }
    setTimeout(text_typing, speed);
}());