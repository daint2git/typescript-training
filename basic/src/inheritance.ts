class Course {
  id: number
  name: string
  price: number

  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }

  showCourseInfo(): void {
    console.log('***Course-showCourseInfo***')
    console.log(`${this.id}, ${this.name}, ${this.price}`)
    console.log('******')
  }
}

class CourseTypeScript extends Course {
  note: string

  constructor(id: number, name: string, price: number, note: string) {
    super(id, name, price)
    this.note = note
  }

  showCourseInfo(): void {
    console.log('***CourseTypeScript-showCourseInfo***')
    super.showCourseInfo()
    console.log(this.note)
    console.log('******')
  }
}

const courseInstance = new Course(1, 'React', 199)
courseInstance.showCourseInfo()

console.log('------')

const courseTypeScriptInstance = new CourseTypeScript(2, 'TypeScript', 299, 'Like')
courseTypeScriptInstance.showCourseInfo()

/**                 inside     outside     child class
 * public             +           +           +
 * protected          +           -           +
 * private            +           -           -
 */
