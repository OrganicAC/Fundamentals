let counter = 0;
const increment = () => {
  counter++;
  console.log(counter);
};

const executeAfterIncrement = (delay, callbackFunc) => {
  setInterval(callbackFunc, delay * 1000);
};

executeAfterIncrement(1, increment);
