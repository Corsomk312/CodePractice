unsorted_array = ["z","x", "a", "l"]

def sort(array)
  count = 0
  while count <= array.length
    if (array[count] <=> array[count+1]) == 1
      hold = array[count]
      array[count] = array[count+1]
      array[count+1] = hold
      count = 0
    else
      count += 1
    end
  end
  p array
end

sort(unsorted_array)