document.addEventListener('DOMContentLoaded', () => {
  const {
    AsyncArray,
    add,
    subtract,
    multiply,
    divide,
    mod,
    less,
    equal,
    lessOrEqual,
    sqrt,
  } = Homework;

  // my solution

  async function getSumOfValueOfEvenIndex(asyncArr) {
    const getLenghtPromisify = () =>
      new Promise(resolve => asyncArr.length(result => resolve(result)));
    const lessPromisify = (a, b) =>
      new Promise(resolve => Homework.less(a, b, result => resolve(result)));
    const modPromisify = (a, b) =>
      new Promise(resolve => Homework.mod(a, b, result => resolve(result)));
    const getPromisify = i => new Promise(resolve => asyncArr.get(i, result => resolve(result)));
    const equalPromisify = (a, b) =>
      new Promise(resolve => Homework.equal(a, b, result => resolve(result)));
    const addPromisify = (a, b) =>
      new Promise(resolve => Homework.add(a, b, result => resolve(result)));

    sum = 0;
    let x = await getLenghtPromisify();

    for (let i = 0; await lessPromisify(i, x); i = await addPromisify(i, 1)) {
      if (await equalPromisify(await modPromisify(i, 2), 0)) {
        let value = await getPromisify(i);
        sum = sum + value;
      }
    }

    return sum;
  }

  function mySolution(array, cb) {
    getSumOfValueOfEvenIndex(array).then(r => cb(r));
  }

  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const asyncMyArray = new AsyncArray(myArray);

  console.log('Массив:', myArray);
  mySolution(asyncMyArray, result => console.log('Результат:', result));
});
