const icons = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for(let i = 0; i < icons.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${icons[i]}   `);
  }, i * 300);
};