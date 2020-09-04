
var arr = [1,2,4, [1,2], [3,1], [3, [3,2, [4,5]]]]

 flt = []
 
function flatten(ar) {
   
    ar.forEach(f => {
        if(Array.isArray(f)) {
             flatten(f) 
        } else {
            flt.push(f)
        }
    })
    
    return flt
}

var restult = flatten(arr)

console.log(restult)
