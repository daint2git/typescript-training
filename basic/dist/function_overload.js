// function getData(data: string): string {
//   console.log('string')
//   return data
// }
function getData(data) {
    var typeOfData = typeof data;
    if (typeOfData === 'string')
        return 'string' + data;
    if (typeOfData === 'number')
        return 'number' + data;
    if (typeOfData === 'boolean')
        return 'boolean' + data;
}
getData('abc');
getData(123);
getData(true);
