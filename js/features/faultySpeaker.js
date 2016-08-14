function faultySpeaker() {
  //var myAudio = new Audio();
  //myAudio.src = "static.mp3";
  //myAudio.play();

  $('body').append('<audio id="player" src="audio/static.wav">');
  document.getElementById('player').play();
}
