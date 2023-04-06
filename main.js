const array = [1, 2, 3, 4, 5, 6, 7]
console.log(array)
function removeElement(a,b){
 a.splice((b-1), 1)
}
removeElement(array, 5)
console.log(array)