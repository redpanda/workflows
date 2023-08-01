const core = require('@actions/core');
const fs = require('fs');

try {
    console.log(process.env.ENV)
    const file = core.getInput('file');
    const data = fs.readFileSync(file, 'utf8');
    JSON.parse(data);
} catch (err) {
    core.setFailed(err.message);
}
