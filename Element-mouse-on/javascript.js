let element = document.getElementById("sample-element");

function handleMouseMove(e) {
  element.innerHTML = e.clientX - element.offsetLeft;
  console.log(1)
}

// Throttle để giới hạn số lần gọi hàm trong một khoảng thời gian nhất định
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

let throttledMouseMove = throttle(handleMouseMove, 50); // 50ms throttle

element.addEventListener("mouseover", (e) => {
  element.addEventListener("mousemove", throttledMouseMove);
});

element.addEventListener("mouseleave", (e) => {
  element.removeEventListener("mousemove", throttledMouseMove);
});
