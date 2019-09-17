// function getData(data: string): string {
//   console.log('string')
//   return data
// }

// function getData(data: number): number {
//   console.log('number')
//   return data
// }

// getData('abc')

function getData(data: string): string
function getData(data: number): number
function getData(data: boolean): boolean
function getData(data: any): any {
  const typeOfData = typeof data
  if (typeOfData === 'string') return 'string' + data
  if (typeOfData === 'number') return 'number' + data
  if (typeOfData === 'boolean') return 'boolean' + data
}

getData('abc')
getData(123)
getData(true)
