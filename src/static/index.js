/* eslint-disable no-undef */
const socket = io('/');

socket.on('hello', () => console.log('Somebody Joind'));

socket.emit('helloGuys');
