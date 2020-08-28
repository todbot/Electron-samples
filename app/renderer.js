
console.log('script!');
const electron = require('electron');
const HID = require('node-hid');

const devices = HID.devices();

document.write( "<pre>",JSON.stringify(devices, null, 4), "</pre>")


