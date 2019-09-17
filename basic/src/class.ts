enum TaskStatus {
  created = 1,
  inprogress,
  active,
  inactive,
  finished,
}

interface ITask {
  id: number
  name: string
  status: TaskStatus
  [key: string]: any
}

class TaskService {
  public name: string = 'TaskService'

  public tasks: ITask[]

  constructor(name: string, tasks: ITask[]) {
    this.name = name
    this.tasks = tasks
  }

  getTasks() {
    return this.tasks
  }

  addTask(task: ITask) {
    this.tasks.push(task)
  }

  static showName() {
    return this.name
  }
}

const tasks: ITask[] = [
  { id: 1, name: 'coding', status: TaskStatus.created },
  { id: 2, name: 'testing', status: TaskStatus.created, note: 'need confirm' },
]

const taskServiceInstance = new TaskService('TaskServiceInstance', tasks)

console.log(taskServiceInstance.name)

console.log(TaskService.showName())

console.log(JSON.stringify(taskServiceInstance.getTasks(), null, 2))

const newTask: ITask = { id: 1, name: 'studying', estimation: 5, status: TaskStatus.finished }

taskServiceInstance.addTask(newTask)

console.log(JSON.stringify(taskServiceInstance.getTasks(), null, 2))
