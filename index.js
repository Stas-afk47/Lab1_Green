let file, s, summ,percent,length,monthchanges,balancechange,percentchange,currentresult,result,summchange,errors;
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
else (monthchanges>=0);{
  bank();
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
    (balancechange>0) ? percentchange = 1-Number(summ)/Number(balancechange) : percentchange = 1 - Number(balancechange) / Number(summ);
    percentchange=percentchange.toFixed(2);
    summchange=summchange.toFixed(2);
    balancechange=balancechange.toFixed(2);
    currentresult = {   
      currentBalance: balancechange, 
      balanceChange: summchange,
      percentchange: percentchange * 100     
    }
    result.push (currentresult);
    currentresult={};  
    summ=balancechange;
    if (summ < 0){
      return console.log ('Снятие с счета превысило депозит')
    }
  }
}

output (result);

function output (result) {

  const fs = require ("fs");
  fs.writeFileSync ("output.csv", "Месяц; Текущий баланс; Разница за месяц; Разница за месяц в процентах;", 'utf-8');

  for (let x = 0; x < result.length; x++) { 
    s = x + 1;
    //console.log ('Месяц = ' + s + ' Текущий баланс = ' + result[x].currentBalance + ' Разница за месяц = ' + result[x].balanceChange + ' Разница за месяц в процентах = ' + percentchange);
    file =  s + '; ' + result[x].currentBalance + '; ' + result[x].balanceChange + '; ' + percentchange * 100;
    fs.appendFileSync ("output.csv", `\n${file}`);
  }
} 