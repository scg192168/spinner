const animation = [
  { char: '|', delay: 100 },
  { char: '/', delay: 300 },
  { char: '-', delay: 500 },
  { char: '\\', delay: 700 },
  // Add more characters and delays as needed to complete the full circle
];

const totalTime = animation.reduce((total, frame) => total + frame.delay, 0);
let currentDelay = 0;

process.stdout.write('hello from spinner1.js... \rheyyy\n');

animation.forEach((frame) => {
  setTimeout(() => {
    process.stdout.write(`\r${frame.char}   `);
  }, currentDelay);
  currentDelay += frame.delay;
});

setTimeout(() => {
  console.log(); // Print a new line after the animation completes
}, totalTime);
