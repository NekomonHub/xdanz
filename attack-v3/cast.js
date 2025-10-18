import gradient from 'gradient-string'
import {exec} from "child_process"
console.log(gradient(['red','magenta'])('      ├──> BroadCast Starting > 192.168.1.255'));
setInterval(()=>{
	exec('ping -b -s 1300 192.168.1.255');
},90);
