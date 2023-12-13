import './style.css';
import img from './tile.png';
import img2 from './picsou.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 400);
ctx.arcTo(500, 500, 400, 600, 50);
ctx.lineTo(300, 700);

ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';

ctx.fill();
ctx.stroke();

ctx.closePath();

ctx.beginPath();
ctx.arc(400, 400, 300, 0, Math.PI, true);
ctx.stroke();
ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(300, 300);
// ctx.bezierCurveTo(500, 400, 200, 600, 400, 700);
// ctx.moveTo(300, 300);
// ctx.quadraticCurveTo(600, 600, 400, 700);
// ctx.stroke();
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.quadraticCurveTo(250, 100, 300, 200);
// ctx.quadraticCurveTo(400, 250, 300, 300);
// ctx.quadraticCurveTo(250, 400, 200, 300);
// ctx.quadraticCurveTo(100, 250, 200, 200);
// ctx.lineWidth = 5;
// ctx.fillStyle = '#7ed6df';
// ctx.strokeStyle = '#22a6b3';
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.rect(200, 200, 400, 400);

// const gradient = ctx.createLinearGradient(400, 200, 400, 600);
// gradient.addColorStop(0, 'blue');
// gradient.addColorStop(0.5, 'teal');
// gradient.addColorStop(1, 'red');

// ctx.fillStyle = gradient;
// ctx.fill();

// ctx.rect(0, 0, 800, 800);

// const gradient = ctx.createRadialGradient(400, 400, 100, 400, 400, 400);
// gradient.addColorStop(0, 'green');
// gradient.addColorStop(1, 'yellow');

// ctx.fillStyle = gradient;
// ctx.fill();

// const image = new Image();
// image.src = img;

// image.onload = () => {
// ctx.drawImage(image, 200, 200);
// ctx.drawImage(image, 400, 400, 100, 100);
//   const pattern = ctx.createPattern(image, 'repeat');
//   ctx.rect(0, 0, 800, 800);
//   ctx.fillStyle = pattern;
//   ctx.fill();
// };

// const image = new Image();
// image.src = img2;

// image.onload = () => {
// ctx.drawImage(image, 50, 0, 100, 95, 300, 300, 100, 100);
// };

// ctx.font = 'bold 60px sans-serif';
// ctx.fillStyle = 'red';
// ctx.strokeStyle = 'green';
// ctx.lineWidth = 2;
// ctx.textBaseline = 'middle';
// ctx.textAlign = 'start';
// ctx.fillText('Hello world !', 300, 400);

// ctx.strokeText('Hello world !', 300, 400);
// const mesure = ctx.measureText('Hello world !');
// console.log(mesure);

// ctx.scale(2, 1);
// ctx.rotate(Math.PI / 8);
// ctx.resetTransform();
// ctx.rotate(0);
// ctx.save();
// ctx.rotate(Math.PI / 4);
// ctx.save();
// ctx.rotate(Math.PI / 8);

// ctx.rect(700, 0, 100, 100);
// ctx.restore();
// ctx.rect(700, 0, 100, 100);
// ctx.restore();

// ctx.rect(700, 0, 100, 100);
// ctx.fill();

// rotate => 0

// ctx.save();
// ctx.beginPath();
// ctx.fillStyle = 'purple';
// ctx.shadowColor = '#222';
// ctx.shadowBlur = 0;
// ctx.shadowOffsetX = 15;
// ctx.shadowOffsetY = 15;

// ctx.rect(200, 200, 400, 400);

// ctx.restore();
// ctx.fillStyle = 'green';
// ctx.globalAlpha = 0.5;
// ctx.fillRect(100, 100, 400, 400);

// ctx.save();
// ctx.beginPath();
// ctx.fillStyle = 'purple';
// ctx.rect(200, 200, 400, 400);
// ctx.clip();
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = 'green';
// ctx.rect(100, 100, 400, 400);
// ctx.fill();
// ctx.restore();

// ctx.fillStyle = 'red';
// ctx.fillRect(300, 300, 300, 300);

// ctx.fillStyle = 'orange';
// ctx.arc(600, 600, 150, 0, 2 * Math.PI);
// ctx.fill();

// const image = new Image();
// image.src = img2;

// image.onload = () => {
//   ctx.drawImage(image, 200, 200, 300, 300);
//   const imageData = ctx.getImageData(200, 200, 300, 300);
//   const data = imageData.data;
//   for (let i = 0; i < data.length; i += 4) {
//     const result = 0.5 * (data[i] + data[i + 1] + data[i + 2]);
//     data[i] = result;
//     data[i + 1] = result;
//     data[i + 2] = result;
//   }

//   ctx.putImageData(imageData, 200, 200);
// };

// const link = document.querySelector('a');
// link.addEventListener('click', () => {
//   link.href = canvas.toDataURL();
// });

// const drawRect = (x) => {
//   ctx.clearRect(0, 0, 800, 800);
//   ctx.fillStyle = 'blue';
//   ctx.fillRect(x, 300, 200, 200);
// };

// let start;
// let speed = 30;

// const animation = (timestamp) => {
//   if (!start) start = timestamp;
//   const x = ((timestamp - start) / 1000) * 10;
//   if (x < 600) {
//     drawRect(x);
//     requestAnimationFrame(animation);
//   }
// };

// requestAnimationFrame(animation);
