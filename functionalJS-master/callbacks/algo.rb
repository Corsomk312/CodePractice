#group by elements that are next to each other that are within 5
#Push those elements into a new array
#when elements are no longer within 5 you close the old array and start a new array next time you check one to equal 5

array = [0,1,2,8,10,13,18,27,29,30]
top_level_array = []
new_array = nil
array.group_by.with_index do |spike, i|
  if (array[i+1] - spike) <= 5
    if !new_array
      new_array = []
    end
    new_array << spike
  else
    top_level_array << new_array
    new_array = nil
  end
  p top_level_array
end

p top_level_array