let product = 0;

function recurssion(arr,store,count,ans){

    //base condition

    if(count === arr.length){
        console.log("ans", ans,store)
        product = Math.max(product,ans)
        return;
    }
    store.push(arr[count]);
    ans = ans * arr[count];
    recurssion(arr,store,count+1,ans);
    store.pop();
    ans = Math.floor(ans/arr[count])
    recurssion(arr,store,count+1,ans)

    return product;
}


let nums = [2,3,-2,4]
let store = []
let result = recurssion(nums,store, 0,1)
console.log("result", result)