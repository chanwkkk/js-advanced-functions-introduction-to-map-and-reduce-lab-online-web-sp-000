// Your code here
function mapToNegativize(array){
  return array.map(x=>x*(-1))
}

function mapToNoChange(array){
  return array
}

function mapToDouble(array){
  return array.map(x=>x*2)
}

function mapToSquare(array){
  return array.map(x=>x**2)
}

function reduceToTotal(array, startingPoint){
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer,startingPoint)
}

function reduceToAllTrue(array){
  let reducer = (a,c)=>a && c
  return array.reduce(reducer)
}
