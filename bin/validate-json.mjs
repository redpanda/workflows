#!/usr/bin/env zx

const file = process.argv[3];

try {
    JSON.parse(await $`cat ${file}`);
} catch (e) {
    console.error(e.message);
    process.exit(1);
}

