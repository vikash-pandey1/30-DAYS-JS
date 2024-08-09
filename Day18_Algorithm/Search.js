
    function linearSearch( arr,  target) {
        for (let i = 0; i < arr.length; i++) {
            if (target == arr[i]) {
                return i;
            }
        }
        return -1;
    }
    function binarySearch( arr,target){
        let low =0;
        let high = arr.length-1;
        while (low<=high) {
            let mid = Math.floor((low+high)/2);
            if(arr[mid]==target){
                return mid;
            }else if(target<arr[mid]){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
        return -1;
    }
        let arr = [ 2, 3, 5, 1, 6, 13 ];
        console.log(linearSearch(arr,3))
        let arr2= [1,2,3,4,5,6,7,8,9,10,11];
        console.log(binarySearch(arr2,3));
