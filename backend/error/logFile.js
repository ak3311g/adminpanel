import fs from 'fs';

export default function logFile(filename,message) {
    const msg = JSON.stringify(message) + "\n";
    //console.log(msg);
    fs.appendFile(filename, msg, (err) => {
        if (err) throw err;
    });
}