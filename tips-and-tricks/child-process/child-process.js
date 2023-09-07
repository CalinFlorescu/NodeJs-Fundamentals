/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Launches a new subprocess with the given command                                                                │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

// const { spawn } = require('child_process');

// // Spawn a child process to execute the 'ls' command
// const ls = spawn('ls', ['-l', '/usr']);

// // Listen for data from the child process's stdout
// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// // Listen for errors
// ls.on('error', (error) => {
//   console.error(`Error: ${error.message}`);
// });

// // Listen for the child process to exit
// ls.on('close', (code) => {
//   console.log(`Child process exited with code ${code}`);
// });


/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Spawns a shell then executes the command within that shell, buffering any generated output                      │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

// const { exec } = require('child_process');

// // Allows us to use shell syntax e.g. pipes)
// exec('find . -type f | wc -l', (err, stdout, stderr) => {
//     if (err) {
//       console.error(`exec error: ${err}`);
//       return;
//     }
  
//     console.log(`Number of files ${stdout}`);
// });

/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ This method is used to spawn a new node process                                                                    │
  │ The main difference between span and fork is that                                                                  │
  │ a forked process has a communication channel built in                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */
// const { fork } = require('child_process');

// const forked = fork('child.js');

// forked.on('message', (msg) => {
//   console.log('Message from child', msg);
// });

// forked.send({ hello: 'world' });