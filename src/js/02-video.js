import Player from '@vimeo/player';

const lodash = require('lodash');

const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player(iframe);

vimeoPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'))

vimeoPlayer.on('timeupdate', lodash.throttle((ev) => {
    localStorage.setItem('videoplayer-current-time', `${ev.seconds}`)
}, 1000))


