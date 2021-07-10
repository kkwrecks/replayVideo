let replayVideo = () => {
  Array.from(document.querySelectorAll('.ytp-left-controls button'))
    .filter(a => a.title === 'Replay')
    .forEach(b => b.click())
};

setInterval(replayVideo, 2000);

//tested 10July2021