const IP = '135.23.222.131';
const PORT = 50542;

const controls = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  t: 'Say: Hello everybody!',
  //'\u0003': process.exit()
};

module.exports = {
  IP,
  PORT,
  controls
};