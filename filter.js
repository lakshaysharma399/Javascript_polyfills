
Array.prototype.filter = function (cb){
    var ans = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this)){

            ans.push(this[i]);

        }
       
    }

    return ans;

}

const arr = [2,4,5,8,6];



const res = arr.filter((num) => {
    return num % 2 ==0;
})

console.log(res);

