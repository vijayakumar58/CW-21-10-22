function display (){
    console.log("hi how are you?")
}
display();

function display1 (){
    return "hi how are you?"
}
console.log(display1());

function add (){
    return (3+2);
} console.log(add());

function mul(a,b,c){
    return (a*b*c);
}console.log(mul(20,30,40)); 

function sub(t,e,m,s){
       var total=(t+e+m+s);
       var mark=(total/400);
       var per = (mark*100);
       return per;
}console.log(sub(70,85,91,86));

// function compute (arr,n){
//       if(n===null){
//         return arr[0];
//       }else {for(var i=0;i<=n.length;i++){
//         return arr[i];
//       }
//     }
// };

var n = function(a,b){
    var m = a/b;
    return m;
}
 console.log(n(35,5))

 function sumOf(arr){
    var total=0;
    for (let i=0;i<arr.length;i++)
       total = total+arr[i];
       return total;
 };console.log(sumOf([1,2,3,4,5,6,7,8,9,]));

 var sumOf1=function (arr){
    var total=0;
    for (let i=0;i<arr.length;i++)
       total = total+arr[i];
       return total;
 };console.log(sumOf1([1,2,3,4,5,6,7,8,9,]));

 function compute(arr,n){
    if(n==null){
        return arr[0];
    }else if(n<0){
        return [];
    }else if(n>0) {
        
        return arr.slice(0,n);
       
    }
 };
 console.log(compute([7,9,0,-2]));
 console.log(compute([0,6,4,5]));
 console.log(compute([1,2,3,4],3));
 console.log(compute([1,2,3,4],-3));
 