import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

player.on(
  'timeupdate',
  throttle(function () {
    player
      .getCurrentTime()
      .then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
      })
      .catch(function (error) {});
  }, 1000),
  player
    .setCurrentTime(savedTime)
    .then(function (seconds) {})
    .catch(function (error) {})
);
