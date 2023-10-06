// 方法一

// class TaskPro {
//   constructor() {
//     this._taskList = [];
//     this._currentIdx = 0;
//     this._next = async () => {
//       if (this._currentIdx >= this._taskList.length) {
//         return;
//       }
//       this._currentIdx++;
//       const task = this._taskList[this._currentIdx];
//       await task(this._next);
//     };
//   }
//   addTask(task) {
//     this._taskList.push(task);
//   }
//   async run() {
//     while (this._currentIdx < this._taskList.length) {
//       const task = this._taskList[this._currentIdx];
//       await task(this._next);
//       this._currentIdx++;
//     }
//   }
// }

// 方法二

// class TaskPro {
//   tasks = [];
//   constructor(list) {
//     if (list) {
//       this.list = task;
//     }
//   }
//   addTask(fn) {
//     this.tasks.push(fn);
//   }

//   async run() {
//     const next = async () => {
//       await fn();
//     };

//     const fn = async () => {
//       if (this.tasks.length) {
//         await this.tasks.shift()(next);
//         await fn();
//       }
//     };
//     await fn();
//   }
// }

// 方法三

class TaskPro {
  constructor() {
    this._currentIndex = 0;
    this._isRunning = false;
    this._taskList = [];
    this._next = async () => {
      this._currentIndex++;
      await this._runTask();
    };
  }
  addTask(task) {
    this._taskList.push(task);
  }
  run() {
    if (this._isRunning || !this._taskList.length) {
      return;
    }
    this._isRunning = true;
    this._runTask();
  }
  /**
   * 取出一个任务执行
   */
  async _runTask() {
    if (this._currentIndex >= this._taskList.length) {
      this._reset();
      return;
    }
    const i = this._currentIndex;
    const task = this._taskList[this._currentIndex];
    const j = this._currentIndex;
    await task(this._next);
    if (i === j) {
      await this._next();
    }
  }
  _reset() {
    this._currentIndex = 0;
    this._isRunning = false;
    this._taskList = [];
  }
}

const t = new TaskPro();
t.addTask(async (next) => {
  console.log(1, "start");
  await next();
  console.log(1, "end");
});
t.addTask(() => {
  console.log(2);
});
t.addTask(() => {
  console.log(3);
});
t.run();
