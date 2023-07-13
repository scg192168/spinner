process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

// Add more setTimeout calls to complete the full circle
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1900);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 2100);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 2300);

// Add more setTimeout calls as needed to complete the full circle

setTimeout(() => {
  console.log(); // Print a new line after the animation completes
}, 2500);
