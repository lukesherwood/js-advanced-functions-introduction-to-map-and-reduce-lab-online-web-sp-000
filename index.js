// Your code here
function mapToNegativize(array){
  let ar = []
  for (const element of array) {
  ar.push(element*-1);
  }
  return ar
}

function mapToNoChange(array){
  return array
}

function mapToDouble (array){
  let ar = []
  for (const element of array) {
  ar.push(element*2);
  }
  return ar
}

function mapToSquare (array){
  let ar = []
  for (const element of array) {
  ar.push(element*element);
  }
  return ar
}

function reduceToTotal (array){
  let total = 0
  for (const element of array) {
  total+element;
  }
  return total;
}
