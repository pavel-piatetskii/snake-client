const { stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}

// const chatHandler = function() {
// 
//   });
// }

let connection;

handleUserInput = function(stdin) {

  stdin.on('data', (key) => {   // Ctrl + c
    if (key === '\u0003') {
      process.exit();
    }
  });

  stdin.on('data', (key) => {   // W
    if (key === 'w') {
      connection.write('Move: up');
    }
  });

  stdin.on('data', (key) => {   // A
    if (key === 'a') {
      connection.write('Move: left');
    }
  });

  stdin.on('data', (key) => {   // S
    if (key === 's') {
      connection.write('Move: down');
    }
  });

  stdin.on('data', (key) => {   // D
    if (key === 'd') {
      connection.write('Move: right');
    }
  });

  stdin.on('data', (key) => {   // T (Chat)
    if (key === 't') {
      connection.write('Say: Hello everybody!');
    }
  });
};

module.exports = {setupInput};