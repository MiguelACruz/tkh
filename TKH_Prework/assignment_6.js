var array = ["Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele" ]

var answer = compare(array)

console.log(answer);


function compare(ar) {

  var longest_name = ""
  for (var i = 0; i < ar.length; i++) {

    if(ar[i].length > longest_name.length){
      longest_name = ar[i];
    } else {
      ;
    }
  }

    return longest_name;

}
