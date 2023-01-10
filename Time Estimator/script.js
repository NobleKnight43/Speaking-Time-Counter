function calculateTime() {
  var text = document.getElementById('textInput').value;
  var wordCount = text.split(' ').length;
  var wordsPerMinute = 150;
  var speakingTime = wordCount / wordsPerMinute;
  var minutes = Math.floor(speakingTime);
  var seconds = Math.round((speakingTime - minutes) * 60);
  document.getElementById('wordCount').innerHTML = wordCount;
  document.getElementById('speakingTime').innerHTML =
    minutes + ' minutes and ' + seconds + ' seconds';
}
