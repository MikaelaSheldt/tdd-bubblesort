
// when bubbleSortis passed an empty array, it returns an empty array
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] )
  })
})

// given a singleton array, bubbleSort returns the same array
describe('Bubble Sort', function(){
  it('handles a singleton array', function(){
    expect( bubbleSort([3]) ).toEqual( [3] )
  })
})

//given a list of integers, bubbleSort returns a sorted list
describe('Bubble Sort', function(){
  it('handles an array of integers', function(){
    expect( bubbleSort([3, 8, 2, 1]) ).toEqual( [1, 2, 3, 8] )
  })
})
