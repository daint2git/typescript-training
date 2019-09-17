interface People {
  name: string
  eat(): void
  sleep(): void
}

interface Bird {
  fly(): void
}

class Superman implements People, Bird {
  name: string

  constructor(name: string) {
    this.name = name
  }

  eat(): void {
    console.log('Superman eat')
  }

  sleep(): void {
    console.log('Superman sleep')
  }

  fly(): void {
    console.log('Superman fly')
  }
}

const SupermanA: Superman = new Superman('SupermanA')

SupermanA.eat()
SupermanA.sleep()
SupermanA.fly()
