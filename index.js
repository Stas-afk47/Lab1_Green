let summ,percent,length,monthchanges,balancechange,percentchange,currentresult,result,summchange,errors;
currentresult=[];
result=[];
input();
errors = errorcheck();
if (errors == 1){
  console.log ("Данные некорректны,для помощи введите 'help'")
}
else if (errors == 2){
  console.log("<Сумма> <Процент> <Срок вклада> <Пополнение в месяц>")
}
else if(monthchanges>=0) {
  bank()
}
else{
    bank2()
  }
function input(){
  summ = process.argv[2];
  percent= process.argv[3];
  length = process.argv[4];
  monthchanges = process.argv[5];
}

/*
console.log ("Сумма = "+summ);
console.log ("Процент = "+percent);
console.log ("Срок вклада = "+length);
console.log ("Пополнение в месяц = "+monthchanges);
*/

function errorcheck(){
  if(process.argv[2] == "help"){
    return 2
  }
  else if ((0>percent>100) || (Number.isNaN (percent)==true) || percent == undefined) {
    
    return 1
  }
  else if ((Number.isNaN (summ)==true) || summ == undefined)   {

    return 1
  }
  else if ((Number.isNaN (length)==true) || length == undefined) {
    
    return 1
  }
  else if ((Number.isNaN (monthchanges)==true) || monthchanges == undefined) {
    
    return 1
  }
}


function bank() {
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
    //console.log(balancechange);
    currentresult.push ("Текущий баланс = "+balancechange,"Разница за месяц = "+summchange,"Разница за месяц в процентах = "+percentchange*100);
    result.push (currentresult);
    currentresult=[];  
    summ=balancechange;
  }
  console.log(result);
}
function bank2() {
  percent=percent/12/100;
  percent=percent.toFixed(3);

  for (let y=0; y<length; y++){
    balancechange = Number(summ);
    balancechange = Number(balancechange) + Number(balancechange)*Number(percent);
    balancechange = Number(balancechange) + Number(monthchanges);
    summchange = Number(balancechange) - Number(summ);
    percentchange = 1 - Number(balancechange) / Number(summ);
    percentchange=percentchange.toFixed(2);
    summchange=summchange.toFixed(2);
    balancechange=balancechange.toFixed(2);
    //console.log(balancechange);
    currentresult.push ("Текущий баланс = "+balancechange,"Разница за месяц = "+summchange,"Разница за месяц в процентах = "+percentchange*100);
    result.push (currentresult);
    currentresult=[];
    summ=balancechange;
    if (summ < 0){
      return console.log ('Снятие с счета превысило депозит')
    }
  }
  console.log(result);
}
