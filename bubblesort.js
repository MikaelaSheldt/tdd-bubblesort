function bubbleSort(array) {
  if (array.length <= 1) {
    return array;
  }
  for (let j = array.length-1; j >= 0; j --) {
    let swapped = false
    for (let i = 0; i < j; i ++) {
      if (array[i] > array[i+1]){
        swap(array, i, i+1)
        swapped = true
      }
    }
    if (swapped === false) {
      return array;
    }
  }
  return array;
}

function swap(array, currentIndex, nextIndex) {
    let tempVariable = array[currentIndex]
    array[currentIndex] = array[nextIndex];
    array[nextIndex] = tempVariable;
}
