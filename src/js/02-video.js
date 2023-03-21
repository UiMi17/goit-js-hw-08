import player from '@vimeo/player';
import Player from '@vimeo/player';

const lodash = require('lodash');

const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player(iframe);

const PLAYER_DATA_KEY = localStorage.getItem('videoplayer-current-time');

if (PLAYER_DATA_KEY) {
  vimeoPlayer.setCurrentTime(PLAYER_DATA_KEY);
}

vimeoPlayer.on(
  'timeupdate',
  lodash.throttle(ev => {
    localStorage.setItem('videoplayer-current-time', `${ev.seconds}`);
  }, 1000)
);
