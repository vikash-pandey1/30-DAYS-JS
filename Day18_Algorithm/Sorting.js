function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
function selection(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        let temp = arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
}
function insertion(arr){

}
function partition(arr,low,high){
    let pivot = arr[high];
    let i=low-1;
    for(let j=low;j<arr.length;j++){
        if(arr[j]<pivot){
            i++;
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    let temp = arr[i+1];
    arr[i+1]=arr[high];
    arr[high]=temp;
    return i+1;
}
function quickSort(arr,low,high){
    if(low<high){
        let pi = partition(arr,low,high);
    quickSort(arr,low,pi-1);
    quickSort(arr,pi+1,high);
    }
}
let arr = [13,5,3,63,6];
// bubbleSort(arr);
// selection(arr);
quickSort(arr,0,4);
console.log(arr);