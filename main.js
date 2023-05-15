const soundFolder = "Sounds/"

const soundList = [
    {key: "a" , fileName: "clap.wav"},
    {key: "s" , fileName: "clap.wav"},
    {key: "d" , fileName: "clap.wav"},
    {key: "f" , fileName: "clap.wav"},
    {key: "h" , fileName: "clap.wav"},
    {key: "j" , fileName: "clap.wav"},
    {key: "k" , fileName: "clap.wav"},
    {key: "l" , fileName: "clap.wav"}
]
const drumkit = document.getElementById("drumkit");

function construct(folder,fileInfo){
    const div = document.createElement("div")
    div.classList.add("drum");

    const h2 = document.createElement("h2")
    h2.textContent = fileInfo.key;

    const sound = new Audio(folder + fileInfo.fileName)
    div.appendChild(h2)
    drumkit.appendChild(div)

    window.addEventListener("keydown",(event)=>{
        const soundFile = soundList.find((soundInfo)=>soundInfo.key === event.key)
        if(!soundFile) return;
        const sound = new Audio(folder + fileInfo.fileName)
        playSound(sound)
    })
}

function playSound(audioElement){
    audioElement.currentTime = 0;
    audioElement.pause();
    audioElement.play();
}

soundList.forEach( soundInfo => {
    construct( soundFolder, soundInfo );
});