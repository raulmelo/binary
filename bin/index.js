#!/usr/bin/env node

const process = require('process');
const colors = require("colors");
const emojic = require("emojic");
const args = (process.argv.slice(2));
const fs = require("fs");
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindFunctions = require('./tailwind-functions');



////////////////////////////////
// Search file Tailwind config 
///////////////////////////////
var tailwindConfig;
try {
  if (fs.existsSync(process.cwd() + "/" + args[0])) {
    console.log(colors.bold.bgBlue.black(emojic.whiteCheckMark + "found tailwind.config.js"));
    tailwindConfig = require(process.cwd() + "/" + args[0]);
  } else if (fs.existsSync(process.cwd() + "/tailwind.config.js")) {
    console.log(
      colors.bold.bgBlue.black(
        emojic.whiteCheckMark + " found tailwind.config.js default"
      )
    );
    tailwindConfig = require(process.cwd() + "/tailwind.config.js");
  } else {
    console.log(
      colors.bold.bgYellow.black(emojic.x + " Not found tailwind.config.js")
    );
  }
} catch (err) {
    console.error(err);
    process.exit();
}

///////////////////////////////
// Create folders to stories
///////////////////////////////

var dir = process.cwd() + '/src/stories/stories-tailwind';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
    console.log(colors.bold.bgBlue.black(emojic.whiteCheckMark + 'folder created'));
}

////////////////////////////////
// Create File JSON total config
///////////////////////////////
try {
    let fullConfigJSON = resolveConfig(tailwindConfig);
    tailwindFunctions.loader(fullConfigJSON);
    fullConfigJSON = JSON.stringify(fullConfigJSON, null, 2);
    fs.writeFileSync(dir + "/stories-tailwind.json", fullConfigJSON, { encoding: "utf-8"});
} 
catch (error) {
    console.error(error);
    console.log(colors.bold.bgBlue.black(emojic.x + ' Ops! error'));
}

