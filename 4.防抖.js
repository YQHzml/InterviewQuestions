// 防抖
function debounce(func, delay) {
  let timer;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
const button = document.querySelector("button");
button.addEventListener(
  "click",
  debounce(function () {
    console.log("a");
  }, 300)
);
