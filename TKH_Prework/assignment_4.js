var compare  = 25
over_under_array = [1,45,32,21,5,17,43,93]
for (var i = 0; i < over_under_array.length; i++) {
  if(over_under_array[i] > compare){
    console.log(over_under_array[i] + " is greater than "+ compare);
  } else {
    console.log(over_under_array[i] + " is less than "+ compare);
  }
}
