import moment from 'moment';
import $ from 'jquery';

import styles from './assets/css/styles.css'; /* eslint no-unused-vars: 0 */
import clockStyle from './assets/css/clock.css'; /* eslint no-unused-vars: 0 */
import usersStyle from './assets/css/users.css'; /* eslint no-unused-vars: 0 */

import clockComponent from './js/clockComponent';
import loginComponent from './js/loginComponent';

import { getUsers, deleteUser } from './api/userApi';

const clockElement = clockComponent();
const loginElement = loginComponent();

$('body').append(loginElement);
$('body').append(clockElement);
$('body').append( $('<div />', { id: 'users', class: 'users' }));

$('#email').val('ricardo.proenca@gmail.com');
$('#password').val('123456789');

$('.login-form').submit((event) => {
  event.preventDefault();
  getUsers().then(result => {
    result.forEach(user => {
      $('#users').append(`<br>${user.email}`);
    });
  });
});

function update(el) {
  el.html(moment().format('D. MMMM YYYY H:mm:ss'));
}

update(clockElement);
const runClock = setInterval(update.bind(this, clockElement), 1000);

setTimeout(() => {
  import('./assets/css/clock.lazy.css').catch(err => {
    console.error(err);
  });

  import('./js/clockComponent.lazy')
    .then(lazyClock => {
      clearTimeout(runClock);
      lazyClock(clockElement);
    })
    .catch(err => {
      console.error(err);
    });
}, 10000);
