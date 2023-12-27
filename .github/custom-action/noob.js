const core = require('@actions/core');
const exec = require('@actions/exec');

console.log("Hello World")

function run() {
    core.setOutput('message', 'Osaretin Is The Man');
}

run();

