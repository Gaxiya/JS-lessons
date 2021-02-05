numToObj();
function numToObj() {
    let inputNumber = parseInt(prompt('Write down three-point number'));
    if (inputNumber > 0 && inputNumber <=999) {
        const ones = inputNumber % 10;
        const ten = inputNumber % 100 - ones;
        const hundreds = inputNumber - ones - ten;
        const objNumber = {
            ones,
            ten: ten / 10,
            hundreds: hundreds / 100,
        };
        console.log('Единицы: ' + objNumber.ones + ', Десятки: ' + objNumber.ten + ',  Сотни: ' + objNumber.hundreds);
    } else {
        console.log('Your number' + inputNumber + 'must be in 0 - 999 period');
    }
}
    const basket = function(){
   var inBasket = {
     basketItems:[
        {name:'Утюг',qt: 2},
        {name:'Кофеварка',qt: 1},
        {name:'Пылесос',qt: 1}
     ],
     itemsCost : [
        {name:'Утюг',cost: 100},
        {name:'Кофеварка',cost: 50},
        {name:'Пылесос',cost: 250}
    ]
   }
       

const getItemPrice = (item, array) => {
   let j =0;
    // предполагаем, что мы знаем структуру массива со стоимостями товара, поэтому разбиваем его на 2 одномерных массива
    for (let i = 0; i < array.length; i++) {
      if(item.name==array[i].name){
          j=array[i].cost;
          break;
      }
    }
    // используя метод .indexOf получаем индекс товара в массиве с названиями товаров и возвращаем стоимость по этому индексу из массива цен
    return item.qt*j;
  };
 
    
  
  const countBasketPrice = (basketobj, costObj) => {
    let totalCost = 0;
    for (let i = 0; i < basketobj.length; i++) {
      // на каждой итерации обхода массива корзины обращаемся к функции получения стоимости единицы товара.
      totalCost += getItemPrice(basketobj[i], costObj);
    }
    return totalCost;
  }
  const BasketPrice = (bi,ct) => {
let l="",k="";
for(let i=0;i<bi.length;i++){
    l+=bi[i].name+" в количестве: "+ bi[i].qt +", ";
}
for(let i=0;i<ct.length;i++){
    k+=ct[i].name+" = "+ ct[i].cost + " ";
    
}
    console.log('Корзина: ' + l);
    console.log('Стоимость каждого товара: ' + k);
    console.log('Вывод полной стоимости корзины: ' + countBasketPrice(inBasket.basketItems,inBasket.itemsCost));
}
BasketPrice(inBasket.basketItems,inBasket.itemsCost);
}
basket();
 
