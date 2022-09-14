function date (year,month,day){


let date = new Date(year,month - 1 ,day - 1)
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
);




}date(2016,10,1)