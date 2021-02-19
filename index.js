let summ,percent,length,monthchanges,balancechange,percentchange

function input(){
  summ = prompt ();
  percent= prompt ();
  length = prompt ();
  monthchanges = prompt ();
}

function errorcheck(){
  if (0>percent>100) {
    return console.log('Данные некорректны')
  }
  if (Number.isInteger (summ)==false) {
    return console.log('Данные некорректны')
  }
  if (Number.isInteger (length)==false) {
    return console.log('Данные некорректны')
  }
}


function bank() {

  percent=percent/100;
  console.log('Начальная сумма = '+summ);
  console.log('Начальный процент = '+percent);

  for (let y=0; y<length; y++){
    balancechange = summ;
    balancechange = balancechange + balancechange*percent;
    balancechange = balancechange+monthchanges;
    percentchange = 1-summ/balancechange;
    console.log(balancechange);
    summ=balancechange;
  }
}
