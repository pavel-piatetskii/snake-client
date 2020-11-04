const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
};

let connection;

const handleUserInput = function(stdin) {

  const { controls } = require('./constants');

  stdin.on('data', (key) => {
    if (key in controls) {
      connection.write(controls[key]);
    }
  });

  stdin.on('data', (key) => {   // Ctrl + c
    if (key === '\u0003') {
      process.exit();
    }
  });
};

module.exports = {setupInput};