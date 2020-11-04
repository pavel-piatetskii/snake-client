
const connect = require('./client');
/**
 * Establishes connection with the game server
 */

 const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}

handleUserInput = function(stdin) {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
}

console.log('Connecting ...');
connect();
setupInput();
