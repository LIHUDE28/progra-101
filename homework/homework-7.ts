function max(a: number,b: number,c: number){
  let maxValue: number = 0;
if(a > b && a > c){
    maxValue = a;
    return;
} else if (b > c && b > a){
    maxValue = b;
    return;
}
maxValue = c;
console.log(maxValue);
}


max(1,2,3);