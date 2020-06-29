function XmasTree(n){
let n =+ prompt('Введите число');
for(let i=1;i<=n;i++){
    let str = ' '.repeat(n-i);
    let str ='*'.repeat(i*2-1);
    console.log(str + str2 + str);
}   

}
module.exports = { xmasTree }
let max = +prompt('Введите число', '5'), triangle = "";
for (i=0; i<max; i++){
    triangle += "*";
    console.log(triangle);
}
