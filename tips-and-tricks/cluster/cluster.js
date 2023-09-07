// const cluster = require('cluster');
// const os = require('os');

// // If we are on the master, start the workers
// if (cluster.isMaster) {
//     console.log(`Master PID: ${process.pid}`);

//     // Count the CPUs
//     const cpuCount = os.cpus().length;


//     // Create a worker for each CPU
//     for (let i = 0; i < cpuCount; i++) {
//         cluster.fork();
//     }

//     // Listen for dying workers
//     cluster.on('exit', (worker) => {
//         // Replace the dead worker
//         console.log(`Worker ${worker.id} died. ${worker.process.pid} restarting...`);
//         cluster.fork();
//     });
// } else {
//     console.log(`Worker ${process.pid} started`);
// }

// Let's see a practical example of how to use the cluster module

const express = require('express');
const cluster = require('cluster');
const os = require('os');

const cpuCount = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`Number of CPUs is ${cpuCount}`);
    console.log(`Primary ${process.pid} is running`);

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
        console.log('Starting a new worker');
        cluster.fork();
    })
} else {
    console.log(`Worker ${process.pid} started`);
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get("/api/:n", function (req, res) {
        let n = parseInt(req.params.n);
        let count = 0;
     
        if (n > 5000000000) n = 5000000000;
     
        for (let i = 0; i <= n; i++) {
          count += i;
        }
     
        res.send(`Final count is ${count}`);
      });

    app.listen(3000, () => {
        console.log(`App listening on port 3000`)
    });
}