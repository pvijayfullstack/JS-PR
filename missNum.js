
<div id="test"></div>

<script>
 
 var arr = [1,2,3,4]
 
 function sortArr() {
 	for(var i=0; i < arr.length; i++){
    	for(var j=i; j < arr.length; j++){
        	if(arr[i] > arr[j]){
            	var swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }
        }
    }
  return arr
 }
 
 var sortArr = sortArr()
 
 function missNum(){
 	var maxLen = arr[arr.length-1]
    var mNum = []
    for(var i=1; i < maxLen+1; i++){
    	if(!arr.includes(i)){
        	mNum.push(i)
        }
    }
    return mNum;
 }
 
 
 document.getElementById("test").innerHTML = missNum()
</script>
