let summ,percent,length,monthchanges,balancechange,percentchange,currentresult,result,summchange
input();
errorcheck();
function input(){
  summ = process.argv[2];
  percent= process.argv[3];
  length = process.argv[4];
  monthchanges = process.argv[5];
}


console.log ("Сумма = "+summ);
console.log ("Процент = "+percent);
console.log ("Срок вклада = "+length);
console.log ("Пополнение в месяц = "+monthchanges);

function errorcheck(){
  if(process.argv[2] == "help"){
    console.log("<Сумма> <Процент> <Срок вклада> <Пополнение в месяц>")
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
currentresult=[];
result=[];
if(monthchanges>=0) {
  bank(); console.log("+")
}
  else{
    bank2(); console.log("-")
  }
 
function bank() {
  console.log("b1")
  percent=percent/12/100;
  percent=percent.toFixed(3);
  for (let y=0; y<length; y++){
    balancechange = Number(summ);
    balancechange = Number(balancechange) + Number(balancechange)*Number(percent);
    balancechange = Number(balancechange) + Number(monthchanges);
    summchange = Number(balancechange) - Number(summ);
    percentchange = 1-Number(summ)/Number(balancechange);
    percentchange=percentchange.toFixed(2);
    summchange=summchange.toFixed(2);
    balancechange=balancechange.toFixed(2);
    console.log(balancechange);
    currentresult.push ("Текущий баланс = "+balancechange,"Разница за месяц = "+summchange,"Разница за месяц в процентах = "+percentchange*100);
    result.push (currentresult);
    currentresult=[];  
    summ=balancechange;
  }
}
function bank2() {
  console.log("b2")
  percent=percent/12/100;
  percent=percent.toFixed(3);

  for (let y=0; y<length; y++){
    balancechange = Number(summ);
    balancechange = Number(balancechange) + Number(balancechange)*Number(percent);
    balancechange = Number(balancechange) + Number(monthchanges);
    summchange = Number(balancechange) - Number(summ);
    percentchange = 1-Number(balancechange)/Number(summ);
    percentchange=percentchange.toFixed(2);
    summchange=summchange.toFixed(2);
    balancechange=balancechange.toFixed(2);
    console.log(balancechange);
    currentresult.push ("Текущий баланс = "+balancechange,"Разница за месяц = "+summchange,"Разница за месяц в процентах = "+percentchange*100);
    result.push (currentresult);
    currentresult=[];
    summ=balancechange;
  }
}
console.log(result);