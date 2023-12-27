const core = require('@action/core');
const exec = require('@action/exec');

console.log("Hello World")

function run() {
    core.setOutput('message', 'Osaretin Is The Man');
}

run();

