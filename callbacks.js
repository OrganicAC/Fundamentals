const printHello = () => {
  console.log("Hello, Delay");
};

const executeAfterDelay = (delay, callbackFunc) => {
  setTimeout(callbackFunc, delay * 1000);
};

executeAfterDelay(1.5, printHello);
