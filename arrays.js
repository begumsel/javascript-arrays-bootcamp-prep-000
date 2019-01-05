var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return array.unshift("foo")
}
  
function destructivelyAddElementToBeginningOfArray(array, element){
  return ["foo",...array] 
}

function addElementToEndOfArray(array, element){
  return [...array, "element"]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo")
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1, 4);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}













