const person = {
  name: "Maxine",
  age: 32,
  address: {
    city: "London",
    postcode: "E1 123",
  },
  hobbies: ["Writing", "Tennis", "Cooking"],
};

console.log(person.address.city);
console.log(person.hobbies[1]);

const cohortInfo = {
  name: "Dec 21",
  id: 1234,
  students: ["Anthony", "Naima", "Ben", "Raven"],
};

const cohortSorter = (cohort) => {
  return `<${cohort.name}> - <${cohort.id}> - <${cohort.length}> students in this cohort`;
};

console.log(cohortSorter(cohortInfo));
