import{exec}from'child_process';
import gradient from 'gradient-string';
console.log(gradient(['red','magenta'])('      └──> XnetPower Starting > 192.168.1.250'));
setInterval(()=>{exec('ping -s 65506 192.168.1.250');},500);
