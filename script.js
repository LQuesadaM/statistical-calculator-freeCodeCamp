const getMean = (array) => {
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array
    .map((element) => Number(element))
    .filter((element) => !isNaN(element));
};
