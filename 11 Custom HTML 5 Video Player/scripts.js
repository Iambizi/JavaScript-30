/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const enlarge = player.querySelector('.fullscreen');

/*Build our ELements*/
// play or pause on click used for both video and toggle
 function togglePlay(){
   if(video.paused) {
     video.play()
   } else {
     video.pause()
   }
 }
 function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
 }

function skip(){
  //this.dataset returns the value of data-skip (-10s or 25s)
  console.log(this.dataset);
  // while being carefull to parse it into a number, we will increase the currentTime on video by the exact value we access at this.dataset.skip
  video.currentTime += parseFloat(this.dataset.skip);
}
// range sliders.
function handleRangeUpdate() {
  // Based on the change that happens one range or the other , this.name refers to either volume, or the playbackrate. We then assign it its value (that comes from the range change) hence moving the sliders will respectfully affect the volume or playbackrate.
  // so for ex video[volume] = 0.8 or video[playbackrate] = 1.1
  video[this.name] = this.value;
  // console.log(this.name);
  // console.log(this.value);
}
function handleProgress() {
  // the progress bar has a flexBasis percentage that modifies the length of the progressBar. So we need to get a percentage from dividing the video's currentTime to it duration properties so as to get a proportion that we use to update
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  // off set divide by the entire width of the progress bar and we simply multiply by the duration of the video and then simply update the time of the video.
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentime = scrubTime;
  console.log(e);
}

function fullS(e){
  console.log(e)
  if (video.requestFullscreen){
    video.requestFullscreen()
  }
  else if(video.mozRequestFullscreen){
    video.mozRequestFullscreen()
  }
  else if(video.webkitRequestFullscreen){
    video.webkitRequestFullscreen()
  }
}

/*Hook up the event listeners*/
// togglePlay function
// runs play on click

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
// updates the toggle icon to either pause or play
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
// skip buttons for +25secs or - 10secs
skipButtons.forEach(button => button.addEventListener('click', skip));
//sliders
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

//We need to hook the handleProgress function to an event handler to run, but we dont want it to run all the time so we will listen for the video to emit an event called timeUpdate and run it then. It shows when the video is updating its time code and when the video is paused, its not gonna unecessarily run that function
video.addEventListener('timeupdate', handleProgress);
//we are going to listen for a click on the progress bar and update the bar's length relatibe to the progress bar total width
let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e) =>  mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false)

let allowFullscreen = true;
enlarge.addEventListener('click', fullS);
