let data = [
  { age: 21, name: "hash" },
  { age: 32, name: "abcs" },
  { age: 65, name: "rubs" },
  { age: 15, name: "zany" },
  { age: 21, name: "fugs" },
];
// 一 sort
// data.sort((a, b) => {
//     if (a.age !== b.age) {
//         return a.age - b.age; // 按年龄从小到大排序
//     } else {
//         return a.name.localeCompare(b.name); // 同年龄按名字字母排序
//     }
// });
// 二 不用sort
const optimizeData = (data) => {
  const len = data.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (
        data[i].age > data[i + 1].age ||
        (data[i].age === data[i + 1].age &&
          data[i].name.localeCompare(data[i + 1].name) > 0)
      ) {
        [data[i], data[i + 1]] = [data[i + 1], data[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return data;
};

const sortedData = optimizeData(data);
console.log(data);
