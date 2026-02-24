const orb = document.querySelector('.orb-container');
const log = document.getElementById('status');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;

function nexaSpeak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    synth.speak(utterance);
}

recognition.onstart = () => {
    orb.classList.add('active');
    log.innerText = "NEXA IS LISTENING...";
};

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    processCommand(command);
};

recognition.onend = () => {
    orb.classList.remove('active');
};

function processCommand(cmd) {
    if (cmd.includes('weather')) {
        nexaSpeak("I cannot check live weather without an API key, but it looks digital from here.");
    } else if (cmd.includes('news')) {
        nexaSpeak("Headline: Nexa System has been successfully deployed on your machine.");
    } else {
        nexaSpeak("Command processed. How else can I help?");
    }
}

function startNexa() {
    recognition.start();
}
