import fs from 'fs';

export default function logFile(filename,message) {
    fs.appendFile(filename, message, (err) => {
        if (err) throw err;
    });
}