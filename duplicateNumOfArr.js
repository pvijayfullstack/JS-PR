<div id="test"></div>

<script>
 
 var arr = [1,2,3,4,6,6,6,6,5]
 
 function duplicateNumOfArr() {
 	 var dup = []
     for(var i=0; i < arr.length; i++){
     	var count = []
     	for(var j=i; j < arr.length; j++){
        	if(arr[i] == arr[j]){
            	count.push(arr[i])
            }
        }
        if(count.length > 1){ 
       	 dup.push(count)
        }
     }
  return dup
 }
 document.getElementById("test").innerHTML = duplicateNumOfArr()
</script>
