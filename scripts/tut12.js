// let percentBonus = 0.1;
let percentBonus =()=> 0.1;
let getValue = function (
  value = 10,
  /*bonus = 5*/ bonus = value *  /*percentBonus*/ percentBonus()
) {
  console.log(value + bonus);
  console.log(arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
