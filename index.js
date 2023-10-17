const audio = document.getElementById('audio');
const time = document.getElementById('range-time');
const btnplay = document.getElementById('play');
const Start = document.getElementById('start');
const minutSpan = document.getElementById('minut');
const secendSpan = document.getElementById('secend');
const low = document.getElementById('low');
const high = document.getElementById('high');
const rangeVolume = document.getElementById('volume');
const back = document.getElementById('back');
const front = document.getElementById('front');
const end = document.getElementById('end');
let minuet = 0;
let second = 0;
let isPlaying = false;
let timeAudio = 0;
time.addEventListener('click', () => {
    audio.currentTime = Number(time.value);
});
rangeVolume.addEventListener('click', () => {
    audio.volume = Number(rangeVolume.value);
});
btnplay.addEventListener('click', () => {
    let secend = Math.floor(audio.duration % 60);
    let Minuet = Math.floor(audio.duration / 60);
    end.innerText = `${Minuet}:${secend}`;
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        btnplay.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
    else {
        audio.play();
        setInterval(() => {
            let curTime = Math.floor(audio.currentTime);
            time.value = String(curTime);
            second = curTime;
            minuet = Math.floor(second / 60);
            second = Math.floor(second % 60);
            minutSpan.innerText = String(minuet);
            secendSpan.innerText = String(second);
        }, 1000);
        btnplay.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        isPlaying = true;
    }
});
low.addEventListener('click', () => {
    rangeVolume.value = String(Number(rangeVolume.value) - 0.1);
    audio.volume = Number(rangeVolume.value);
});
high.addEventListener('click', () => {
    rangeVolume.value = String(Number(rangeVolume.value) + 0.1);
    audio.volume = Number(rangeVolume.value);
});
front.addEventListener('click', () => {
    audio.currentTime += 10;
});
back.addEventListener('click', () => {
    audio.currentTime -= 10;
});
