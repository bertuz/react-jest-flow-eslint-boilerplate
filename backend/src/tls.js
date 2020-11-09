// @flow
const {readFileSync} = require('fs');
const {join} = require('path');

export const key: Buffer = readFileSync(join(__dirname, '../../dev/cert/localhost.key'));
export const cert: Buffer = readFileSync(join(__dirname, '../../dev/cert/localhost.crt'));
