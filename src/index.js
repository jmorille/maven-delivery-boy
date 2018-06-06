'use strict';
const fs = require('fs');
const downloadArtifacts  = require('maven-id-resolver');

console.log(downloadArtifacts);
downloadArtifacts(['org.apache.commons:commons-lang3:3.4']).then(res => {
    console.log(res);
})