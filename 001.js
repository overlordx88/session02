var ar = ["heloo world" , 1, 2, 3,"bar", "baz",9 , 7 , 8 , "foo", "qux" , 4, 5, 6 , "zero", "one", "two", "three","true" , "false" ,"Hege", "Mohammad" , "Hamed" , "Borge" , "Jani", 'A', 'B', 'D', 'E', 0];
var num = Number(prompt('what does your choosen number between 0-30?'));

alert( "you have choosen to delet : ( " + ar[num] + " )  please push down ok button if you want to see the result in consol loges." )
delete (ar,num)[4];
console.log( ar ); 