const core = require('@actions/core');
const exec = require('@actions/exec');

function run() {
    const name: core.getInput('name', {required: true});
    const age: core.getInput('age', {required: true});
    const occupation: core.getInput('occupation', {required: true});

    const message = `Name: ${name}\n
                     Age: ${age}\n
                     Occupation: ${occupation}`

    core.setOutput('message', message);
}

run();

