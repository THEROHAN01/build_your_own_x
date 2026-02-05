#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk').default;
const path = require('path');
const pkgUp = require('pkg-up');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');


try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (args['--start']) {

    const config = getConfig();
    start(config);


    const pkgPath = pkgUp.sync({cwd: process.cwd()});
    const pkg = require(pkgPath);

    if(pkg.tool){
      console.log(chalk.bgGreenBright(`starting the app on port ${pkg.tool.port}`));
    }else{
      console.log(chalk.bgRedBright('no tool config found'));
    }

    // TODO: do something with pkg
    console.log(chalk.bgCyanBright('starting the app'));
  }
} catch (e) {
  console.log(chalk.yellow(e.message));
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
}