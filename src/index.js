import './sass/styles.scss';

let canvas;

window.onload = () => {
    console.log('canvas on load...');
    canvas = document.querySelector('#canvas');
    let context = canvas.getContext('2d');
    // draw a purple rectangle
    context.fillStyle = '#9c54e6';
    context.fillRect(100, 100, canvas.width / 4, canvas.height / 4);
}