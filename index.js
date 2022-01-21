const con = require('./database/connector');

const {queryVerify} = require('./queries/queries');

const queryDane = `
SELECT * FROM dane
;`;

let counter = 0;
let objRecords = [];

const executeUpdate = (row) => {
  const num1 = row['Liczba 1'];
  const num2 = row['Liczba 2'];
  const num3 = row['Liczba 3'];
  const num4 = row['Liczba 4'];
  const num5 = row['Liczba 5'];
  const losowanie = row['Losowanie'];
  con.query(queryVerify(num1, num2, num3, num4, num5), async (err, result) => {
    if (err) {
      console.error(err);
    } else {
      counter++;
      const changed = result.changedRows;
      console.log(`Losowanie nr ${losowanie}. Zmienionych rekordów: ${changed}`)
    }
  })
}

const selectDane = () => {
  con.query(queryDane, async (err, result) => {
    if (err) {
      console.error(err);
    } else {
      result.forEach((record) => {objRecords.push(record)})
    }
    objRecords.forEach(record => executeUpdate(record))
  })
}

selectDane();

console.log(objRecords)