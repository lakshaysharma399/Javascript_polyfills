Array.prototype.map = function(cb) {

    var ans = [];
    for(i=0; i<this.size(); i++){

        ans.push(cb(this[i], i, this));

    } 

    return ans;

}


const arr = [2,4,5,7,9];

const ans = arr.map((num) =>{

    return num * num;

})

console.log(ans);
