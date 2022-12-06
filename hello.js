const fizzBuzz = (num) => {
  for (let i = 0; i < num; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
};

fizzBuzz(50);

const upperCaseMessage = (message) => {
  return message.toUpperCase();
};
const lowerCaseMessage = (message) => {
  return message.toLowerCase();
};
const transform = (message, transformMessage) => {
  return transformMessage(message);
};

console.log(transform("hello", upperCaseMessage));
console.log(transform("HELLO", lowerCaseMessage));

const notifyByEmail = (emailAddress) => {
  return `Email sent to: ${emailAddress}`;
};
const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
};
const notify = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
};
console.log(notify("hello@makers.tech.test", notifyByEmail));
console.log(notify("100000000", notifyByText));
