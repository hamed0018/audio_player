const audio = <HTMLAudioElement>document.getElementById('audio')
const time = <HTMLInputElement>document.getElementById('range-time')
const btnplay = <HTMLButtonElement>document.getElementById('play')
const Start = <HTMLElement>document.getElementById('start')
const minutSpan = <HTMLSpanElement>document.getElementById('minut')
const secendSpan = <HTMLSpanElement>document.getElementById('secend')
const low = <HTMLButtonElement>document.getElementById('low')
const high = <HTMLButtonElement>document.getElementById('high')
const rangeVolume = <HTMLInputElement>document.getElementById('volume')
const back = <HTMLButtonElement>document.getElementById('back')
const front = <HTMLButtonElement>document.getElementById('front')
const end = <HTMLElement>document.getElementById('end')
let minuet = 0  ;
let second= 0  ;
let isPlaying: boolean = false;
let timeAudio = 0

    time.addEventListener('click' , ()=>{

        audio.currentTime = Number(time.value)
    })
    rangeVolume.addEventListener('click' , ()=>{
        audio.volume = Number(rangeVolume.value)
    })
    

btnplay.addEventListener('click' , ()=>{
    let secend = Math.floor(audio.duration %60)
let Minuet = Math.floor(audio.duration/60)


end.innerText = `${Minuet}:${secend}`
    if(isPlaying){
        audio.pause()
        isPlaying = false
        btnplay.innerHTML = `<i class="fa-solid fa-play"></i>`
        
    }
    else{
        audio.play()
        setInterval(()=>{
            let curTime = Math.floor(audio.currentTime)
            time.value = String( curTime)
                second = curTime ;
                minuet = Math.floor(second/60)
                second = Math.floor(second%60)
                minutSpan.innerText = String(minuet)
                secendSpan.innerText = String(second)
                
                
        } , 1000)
        btnplay.innerHTML = `<i class="fa-solid fa-pause"></i>`
        isPlaying = true

    }
})
low.addEventListener('click' , ()=>{
    rangeVolume.value = String( Number(rangeVolume.value)- 0.1) ;
    audio.volume = Number(rangeVolume.value)
})
high.addEventListener('click' , ()=>{
    rangeVolume.value = String( Number(rangeVolume.value)+ 0.1) ;
    audio.volume = Number(rangeVolume.value)
})
front.addEventListener('click' ,()=>{
    audio.currentTime += 10
})
back.addEventListener('click' , ()=>{
    audio.currentTime -=10
})



