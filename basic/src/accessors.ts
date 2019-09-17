class CourseExample {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  showCourseInfo() {
    console.log(this._name)
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }
}

const courseExampleInstance = new CourseExample('TypeScript')
console.log(courseExampleInstance)
console.log(courseExampleInstance.name)
courseExampleInstance.name = 'React'
console.log(courseExampleInstance.name)
