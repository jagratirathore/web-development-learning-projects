let colors=["red","yellow","blue","orange","pink","white"];

//slice()-
console.log(colors.slice());//(6)["red","yellow","blue","orange","pink","white"]

//slice(starting index se sbhi de dega)
console.log (colors.slice(2));//(4)["blue","orange","pink","white"]

//slice(startingindex,endingindex)
console.log (colors.slice(2,3));//(1)['blue']

//negative value bhi use kr skte h hm slice me slice(piche se do element print honge)
console.log (colors.slice(-2));//(2)["pink","white"]

//length-1 krenge to last index ki value return hogi
console.log(colors.slice(colors.length-1));//white

//agr slice fuction ke andg mene invalid parameters pass kre to)or glt pass kr diya slice me to khali index milega empty
console.log(colors.slice(8));//[]

//pass kre invalid parameters to empty aayega
console.log(colors.slice(colors.length));
