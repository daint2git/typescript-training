var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["created"] = 1] = "created";
    TaskStatus[TaskStatus["inprogress"] = 2] = "inprogress";
    TaskStatus[TaskStatus["active"] = 3] = "active";
    TaskStatus[TaskStatus["inactive"] = 4] = "inactive";
    TaskStatus[TaskStatus["finished"] = 5] = "finished";
})(TaskStatus || (TaskStatus = {}));
var TaskService = /** @class */ (function () {
    function TaskService(name, tasks) {
        this.name = 'TaskService';
        this.name = name;
        this.tasks = tasks;
    }
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskService.showName = function () {
        return this.name;
    };
    return TaskService;
}());
var tasks = [
    { id: 1, name: 'coding', status: TaskStatus.created },
    { id: 2, name: 'testing', status: TaskStatus.created, note: 'need confirm' },
];
var taskServiceInstance = new TaskService('TaskServiceInstance', tasks);
console.log(taskServiceInstance.name);
console.log(TaskService.showName());
console.log(JSON.stringify(taskServiceInstance.getTasks(), null, 2));
var newTask = { id: 1, name: 'studying', estimation: 5, status: TaskStatus.finished };
taskServiceInstance.addTask(newTask);
console.log(JSON.stringify(taskServiceInstance.getTasks(), null, 2));
