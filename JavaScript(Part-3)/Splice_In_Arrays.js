//splice->means kaat dena 
let cars=["audi","bmw","xuv","maruti"];
console.log(cars);(4)

//3 index se le ke jitne bhi element h delete krna chahte h hm to
console.log(cars.splice(3));//(1)[maruti]

//ab cars ko check krenge to original array me maruti delete   ho jaayega
console.log(cars);//(3)["audi","bmw","xuv"]

//0 index se suru kr ke 1 element ko delete kr do audi delete ho jaayega
console.log(cars.splice(0,1));//audi delete ho jaayega

console.log(cars);//(2)["bmw","xuv"]

//kuch chiz add kr di apn ne vaaps cars me maruti or ferrari
console.log(cars.push("maruti"));//push se ending me add hote h element
console.log(cars.push("ferrari"));
console.log(cars);//(4)"bmw","xuv","maruti","ferrari"]

//1 index se do element ko delete krna chahte h xuv or maruti delete krna h to
console.log(cars.splice(1,2));//["xuv","maruti"]
console.log(cars);//(2)["bmw","ferrari"]

//0 index pe add krna h hmko , kuch bhi delete nhi krna to 0 ,or "toyota","xuv","maruti" add krna h 
console.log(cars.splice(0,0, "toyota","xuv","maruti"));//it gives q ki delete kuch nhi ho rha to empty array dega slice[]
console.log(cars);//(5)["toyota","xuv","maruti","bmw","ferrari"]

//index 1 pe mercedes add krna h to
console.log(cars.splice(1,0,"mercedes"));//[]
console.log(cars);//(6)["toyota","mercedes","xuv","maruti","bmw","ferrari"]

//replace krna chahte h mercedes ke place pe gwagon aa jaana chaiye to index h merceded ka 1 delete bhi 1 mercedes hi krna or uski place pr "gawagon" add krna h
console.log(cars.splice(1,1,"gwagon"));//mercedes-delete hoga
console.log(cars);//  (6)["toyota","gwagon","xuv","maruti","bmw","ferrari"]

//note-splice(startingindex, starting se kitne element delete krna,or kitne element add krna-agr ek bhi item add nhi krna to 0)