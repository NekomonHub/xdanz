import gradient from 'gradient-string'
import {exec} from "child_process"
console.log(gradient(['red','magenta'])('      ├──> IcmpPingv2 Starting > 192.168.1.1'));
setInterval(()=>{
    exec('ping -s 65505 192.168.1.1');
},400);







