// class TaskRunner {
//     constructor(batchSize) {
//         this.batchSize = batchSize;
//         this.tasks = new Array(batchSize);
//         this.count = 0;
//         this.batchCount = 0;
//     }
//     addTask(callback) {
//         if (this.count !== 0 && this.count % this.batchSize === 0) {
//             this.batchCount++;
//         }
//         if (this.tasks[this.batchCount]) {
//             this.tasks[this.batchCount].push(callback);
//         } else {
//             let task = [callback];
//             this.tasks[this.batchCount] = task;
//         }
//         this.count++;
//     }
//     start() {
//         for (let i = 0; i < this.tasks.length; i++) {
//             console.log("Running batch", i);
//             let batchTasks = this.tasks[i];
//             for (let j = 0; j < batchTasks.length; j++) {
//                 const task = batchTasks[j];
//                 task();
//             }
//         }
//     }
// }
//
// let taskRunner = new TaskRunner(2);
//
// taskRunner.addTask(() => console.log(1 + 2));
//
// taskRunner.addTask(() => console.log(1 + 2));
//
// taskRunner.addTask(() => console.log(1 + 2));
//
// taskRunner.addTask(() => console.log(1 + 2));
//
// taskRunner.start();
//
// /**
//  Running batch 1
//  3
//  3
//  Running batch 2
//  3
//  3
//  */


class TaskRunner {
    constructor(batchSize) {
        this.batchSize = batchSize;
        this.tasks = new Array(batchSize);
        this.count = 0;
        this.batchCount = 0;
    }
    addTask(callback) {
        if (this.count !== 0 && this.count % this.batchSize === 0) {
            this.batchCount++;
        }
        if (this.tasks[this.batchCount]) {
            this.tasks[this.batchCount].push(callback);
        } else {
            let task = [callback];
            this.tasks[this.batchCount] = task;
        }
        this.count++;
    }
    start() {
        for (let i = 0; i < this.tasks.length; i++) {
            console.log("Running batch", i);
            let batchTasks = this.tasks[i];
            setTimeout(function() {
                for (let j = 0; j < batchTasks.length; j++) {
                    (function(taskElement) {
                        const task = batchTasks[taskElement];
                        task();
                    })(j);
                }
            }, 1000);
        }
    }
}

let taskRunner = new TaskRunner(2);

taskRunner.addTask(() => console.log(1 + 2));

taskRunner.addTask(() => console.log(1 + 2));

taskRunner.addTask(() => console.log(1 + 2));

taskRunner.addTask(() => console.log(1 + 2));

taskRunner.start();

