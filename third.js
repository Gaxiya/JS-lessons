const simple = function(x){
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {return false;
      }
      return true;
    };
}
const fisrtinThird = function(x){
    const arr = [];
  let i = 2;
  while (i <= x) {
    if (simple(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
  
}

  console.log('Вывод массива простых чисел от 0 до 100: ' + fisrtinThird(100));
 



empty();
function empty()
{
    for (let i = 0; i <= 9; console.log('Цикл без тела {}: ' + i++)) {}
}



const pyramid = (rows, symbol) => {
  let picture = '';
  for (let i = 1; i <= rows; i++) {
    console.log(picture += symbol);
  }
};

pyramid(20, 'x');

