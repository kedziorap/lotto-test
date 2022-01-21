const queryVerify = (i,j,k,l,m) => {
  return `UPDATE big_numbers SET flag = 0 WHERE 
  ((num1=${i} OR num1=${j} OR num1=${k} OR num1=${l} OR num1=${m}) AND
  (num2=${i} OR num2=${j} OR num2=${k} OR num2=${l} OR num2=${m}) AND 
  (num3=${i} OR num3=${j} OR num3=${k} OR num3=${l} OR num3=${m}) AND
  (num4=${i} OR num4=${j} OR num4=${k} OR num4=${l} OR num4=${m})) OR
  ((num1=${i} OR num1=${j} OR num1=${k} OR num1=${l} OR num1=${m}) AND
  (num3=${i} OR num3=${j} OR num3=${k} OR num3=${l} OR num3=${m}) AND 
  (num4=${i} OR num4=${j} OR num4=${k} OR num4=${l} OR num4=${m}) AND
  (num5=${i} OR num5=${j} OR num5=${k} OR num5=${l} OR num5=${m})) OR
  ((num1=${i} OR num1=${j} OR num1=${k} OR num1=${l} OR num1=${m}) AND
  (num2=${i} OR num2=${j} OR num2=${k} OR num2=${l} OR num2=${m}) AND 
  (num4=${i} OR num4=${j} OR num4=${k} OR num4=${l} OR num4=${m}) AND
  (num5=${i} OR num5=${j} OR num5=${k} OR num5=${l} OR num5=${m})) OR
  ((num1=${i} OR num1=${j} OR num1=${k} OR num1=${l} OR num1=${m}) AND
  (num2=${i} OR num2=${j} OR num2=${k} OR num2=${l} OR num2=${m}) AND 
  (num3=${i} OR num3=${j} OR num3=${k} OR num3=${l} OR num3=${m}) AND
  (num5=${i} OR num5=${j} OR num5=${k} OR num5=${l} OR num5=${m})) OR
  ((num2=${i} OR num2=${j} OR num2=${k} OR num2=${l} OR num2=${m}) AND
  (num3=${i} OR num3=${j} OR num3=${k} OR num3=${l} OR num3=${m}) AND
  (num4=${i} OR num4=${j} OR num4=${k} OR num4=${l} OR num4=${m}) AND
  (num5=${i} OR num5=${j} OR num5=${k} OR num5=${l} OR num5=${m})) AND flag = 1;`
};

module.exports = {
  queryVerify
}