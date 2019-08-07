var list = ['Zebra', 'Tiger', 'Lion', 'Bird', 'Cat', 'Dog'];
var consumer = Number(propmt (" What product do you need? : Zebra ,  Tiger ,  Lion ,  Bird ,  Cat ,  Dog "));
var stack = list.indexOf(consumer);
var result = (stack == -1) ? alert(" product not available " + consumer) : alert(  "there is in the stack go to buy " + consumer);
console.log(list.indexOf(consumer));

