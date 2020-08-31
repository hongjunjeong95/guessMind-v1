const body = document.querySelector('body');

const fireNotification = (text, color) => {
  console.log('newuse2r');
  const notification = document.createElement('div');
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = 'notification';
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  console.log('handleNewUSer');
  fireNotification(`${nickname} just joined!`, 'rgb(0, 122, 255)');
};

export const handleDisconnected = ({ nickname }) =>
  fireNotification(`${nickname} just left!`, 'rgb(255, 149, 0)');
