let summ,percent,length,monthchanges,balancechange,percentchange,currentresult,result,summchange
input();
errorcheck();
function input(){
  summ = process.argv[2];
  percent= process.argv[3];
  length = process.argv[4];
  monthchanges = process.argv[5];
  percent=percent/100/12;
  percent=percent.toFixed(2);
  balancechange = summ;
    balancechange == balancechange + balancechange*percent;
    balancechange = balancechange+monthchanges;
    summchange = balancechange - summ;
    percentchange = 1-summ/balancechange;
}
percent=percent/100/12;
percent=percent.toFixed(2);
balancechange = summ;

console.log (summ);
console.log (percent);
console.log (length);
console.log (monthchanges);
function errorcheck(){
  if(process.argv[2] == "help"){
    console.log("<Сумма> <Процент> <Срок> <Пополнение в месяц>")
  }
  else if (0>percent>100) {
    return console.log('Данные некорректны')
  }
  else if (Number.isInteger (summ)==false) {
    return console.log('Данные некорректны')
  }
  else if (Number.isInteger (length)==false) {
    return console.log('Данные некорректны')
  }
  
}

//bank()
function bank() {
  
  percent=percent/12;
  percent=percent.toFixed(2);
  for (let y=0; y<length; y++){
    balancechange = summ;
    balancechange = balancechange + balancechange*percent;
    balancechange = balancechange + monthchanges;
    summchange = balancechange - summ;
    percentchange = 1-summ/balancechange;
    console.log(balancechange);
    currentresult.push ("Текущий баланс = "+balancechange+"Разница за месяц = "+summchange+"Разница за месяц в процентах = "+percentchange);
    result.push (currentresult);
    currentresult=[];
    summ=balancechange;
  }
}
