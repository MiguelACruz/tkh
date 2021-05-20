var names_array = ["bob", "jimmy", "max b", "bernie", "jordan", "future hendrix"]


var even_array = compare(names_array)

console.log("Final array: " + even_array)


function compare(ar) {

  var e = []
  var o = []

  for (var i = 0; i < ar.length; i++) {

    if (ar[i].length % 2 == 0) {

      e.push(ar[i])
    } else {

      o.push(ar[i])
    }
  }

  console.log(e)
  console.log(o)

  for (var i = 0; i < e.length; i++) {
    e[i] = "b" + e[i].slice(1)
  }
  
  console.log(e)

  for (var i = 0; i < o.length; i++) {
    o[i] = o[i].slice(0, o[i].length - 1) + "c"
  }

  console.log(o)

  return e

}
