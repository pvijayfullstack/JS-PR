a = [1,2,3,4,5,6]

function loop(a) {
  i = 1;
   while(i < a.length) {
       console.log(i)
       i++
   } 
}

loop(a)


// OR

arr = [1,2,3,4,5,6]

i = 0

function forEach(a) {

  if(i < a.length) {
     i++
     console.log(i)
     forEach(a)
  }
  
}

forEach(arr)
