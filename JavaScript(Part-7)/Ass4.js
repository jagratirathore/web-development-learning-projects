//4)What is the output of the following code:

let length=4;
function callback(){
    console.log(this.length);
}
const object={
    length:5,
    method(callback){
       callback();
    },
};
object.method(callback,1,2);//ans-'Hello,World!'isloggedtotheconsole.object.getMessage()isamethodinvocation,that'swhythisinsidethemethodequalsobject.There'salsoavariabledeclarationconstmessage='Hello,Earth!'insidethemethod.Thevariabledoesn'tinfluencethevalueofthis.message.