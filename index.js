function bank() {
  let x,percent,length
  x = prompt ();
  percent= prompt ();
  length = prompt ();
  if (0>percent>100) {
    return 'Данные некорректны'
  }
  if (Number.isInteger (x)==false) {
    return 'Данные некорректны'
  }
  if (Number.isInteger (length)==false) {
    return 'Данные некорректны'
  }
}