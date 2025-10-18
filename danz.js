import { spawn, exec } from 'child_process';
import gradient from 'gradient-string'
import readline from 'readline'
import open from 'open'
import { readdir } from 'fs/promises';
import { join } from 'path';

async function all(folderPath) {
  try {
    const files = await readdir(folderPath);
    const jsFiles = files.filter(f => f.endsWith('.js'));
    for (const file of jsFiles) {
      const fullPath = join(folderPath, file);
      const child = spawn('node', [fullPath], { stdio: 'inherit' });
      child.on('error', (err) => {
      });
      await new Promise((resolve) => child.on('exit', resolve));
    }
  } catch (err) {
  }
}

const log = console.log;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function danzrun(){
	clear();
	await open('https://tiktok.com/@danzxploit');
	await start();
} danzrun();

async function clear(){
	spawn('clear',{
		stdio:"inherit"
	});
} async function start(){
const teks =`
       ██   ██▒▓█████▄  ▄▄▄       ███▄    █ ▒███████▒
      ▒▒ █ █ ▒░▒██▀ ██▌▒████▄     ██ ▀█   █ ▒ ▒ ▒ ▄▀░
      ░░  █   ░░██   █▌▒██  ▀█▄  ▓██  ▀█ ██▒░ ▒ ▄▀▒░
       ░ █ █ ▒ ░▓█▄   ▌░██▄▄▄▄██ ▓██▒  ▐▌██▒  ▄▀▒   ░
      ▒██▒ ▒██▒░▒████▓  ▓█   ▓██▒▒██░   ▓██░▒███████▒
      ▒▒ ░ ░▓ ░ ▒▒▓  ▒  ▒▒   ▓▒█░░ ▒░   ▒ ▒ ░▒▒ ▓░▒░▒
      ░░   ░▒ ░ ░ ▒  ▒   ▒   ▒▒ ░░ ░░   ░ ▒░░░▒ ▒ ░ ▒
       ░    ░   ░ ░  ░   ░   ▒      ░   ░ ░ ░ ░ ░ ░ ░
       ░    ░     ░          ░  ░         ░   ░ ░
            ░                           ░

      ╭──────────────────────┬───────────────────────╮
      ├# Name   : 𝕏𝙳𝐚ɴ𝙕      ├# Language : JavaScript│
      ├# Versi  : 2.0.0      ├# Runtime  : NodeJS    │
      ├# Base   : Xnet       ├# Owner    : AnonDanz02│
      ├# Credit : AnonDellX  ├# Credit   : Xnet-Team │
      ├──────────────────────┼───────────────────────┤
      ├─────[ Wifi Attack ]──┼──[ Ultimate Attack ]──┤
      ├>[1] Wifi-AttackV1    ├>[4] 𝕏𝙳𝐚ɴ𝙕 - V1        │
      ├>[2] Wifi-AttackV2    ├>[5] 𝕏𝙳𝐚ɴ𝙕 - V2        │
      ├>[3] Wifi-AttackV3    ├>[6] 𝕏𝙳𝐚ɴ𝙕 - V3        │
      ├──────────────────────┴───────────────────────┘
      ├─> Tiktok  :  [10]
      ├─> Saluran :  [11]
      ├─> Keluar  :  [66]
      ├──────────────────────>`
log(gradient(['red','red','red','red','magenta','red'])(teks));
rl.question(gradient(['red','magenta'])('      ├──> Select features: '), (m) => {
	switch(m.toLowerCase()){
		case '1':
		 run('./attack-v1/broadcast.js');
		 run('./attack-v1/udpstroy.js');
		 run('./attack-v1/pingofdeath.js');
		 run('./attack-v1/xnetpower.js');
		break;
		case '2':
		 run('./attack-v2/udpnet.js');
		 run('./attack-v2/icmp.js');
		 run('./attack-v2/cast.js');
		 run('./attack-v2/PoD.js');
		break;
		case '3':
		 run('./attack-v3/udpnet.js');
		 run('./attack-v3/icmp.js');
		 run('./attack-v3/cast.js');
		 run('./attack-v3/PoD.js');
		break;
//===============================================\\
        case '4':
         run('./𝕏𝙳𝐚ɴ𝙕/v1/destroy.js');
         run('./𝕏𝙳𝐚ɴ𝙕/v1/support.js');
        break;
        case '5':
         run('./𝕏𝙳𝐚ɴ𝙕/v2/destroy.js');
         run('./𝕏𝙳𝐚ɴ𝙕/v2/support.js');
        break;
        case '6':
         run('./𝕏𝙳𝐚ɴ𝙕/v3/destroy.js');
         run('./𝕏𝙳𝐚ɴ𝙕/v3/support.js');
        break
//===============================================\\
        case '10':
         open('https://tiktok.com/@danzxploit');
         rl.close();
        break;
        case '11':
         open('https://whatsapp.com/channel/0029VbB6BCGFMqrU1maExD1b');
         rl.close();
        break;
        case '66':
         rl.close();
        break;
//===============================================\\
	  default:
	   log(gradient(['red','magenta'])('      └──> Options not available!'));
	   rl.close();
	};
})
} function run(path){
	spawn('node',[path],{
		stdio:"inherit"
	});
}
