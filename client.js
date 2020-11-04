const net = require('net');
const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({ 
    IP,
    PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('We have connected to the server!');
    conn.write('Name: J&K');
  });

  //conn.on('connect', () => setInterval ( () => conn.write('Move: up'), 50));

  return conn;
};

module.exports = {connect};