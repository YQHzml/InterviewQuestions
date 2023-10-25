// 实现一个函数uniq，用于去除数组里面一些“重复”的元素，
// 传入的参数是一个数组，每一项的结构是：{ id: number, name: string }，
// 去重的规则是去除id相同的元素（保留第一个）。uniq函数返回去重后的数组。
function uniq(arr) {
  return arr.reduce((accumulator, obj) => {
    const duplicate = accumulator.find((item) => item.id === obj.id);
    if (!duplicate) {
      accumulator.push(obj);
    }
    return accumulator;
  }, []);
}

const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "C" },
  { id: 3, name: "D" },
];

const result = uniq(arr);
console.log(result);
// [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'D' }]
