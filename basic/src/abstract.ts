abstract class Laptop {
  keyboard(): void {
    console.log('Laptop keyboard')
  }
  mainboard(): void {
    console.log('Laptop mainboard')
  }
  chipset(): void {
    console.log('Laptop chipset')
  }

  abstract price(): void
}

class LaptopDell extends Laptop {
  name: string = 'Laptop Dell'

  chipset(): void {
    console.log('LaptopDell chipset')
  }

  price(): void {
    console.log('LaptopDell 999')
  }
}

const laptopInstance: Laptop = new LaptopDell()
console.log(laptopInstance)
laptopInstance.keyboard()
laptopInstance.mainboard()
laptopInstance.chipset()
laptopInstance.price()
