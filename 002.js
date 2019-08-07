var list = ['Zebra', 'Tiger', 'Lion', 'Bird', 'Cat', 'Dog'];
console.log(list);

var consumer = Number(propmt(" What product number do you choose 0-6?"));
// var stack = list.indexOf(consumer);
console.log("index is: " + consumer);
console.log("content is: " + list[consumer]);
alert(" product not available : ( "+ list[consumer]+" )    the item will remove from list! ");
list.splice(consumer, 1);
console.log(list);

