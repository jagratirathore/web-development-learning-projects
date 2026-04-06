const url ="https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        const config = {headers:{Accept:"application/json"}};//{headers:{key:value}}
        let res = await axios.get(url,config);//ab data json me aayega 
        console.log(res.data);//html me data aa rha h reponse me to header add kr ke usme application/json add kr ke response json me convert krenge
    }catch(e){
        console.log("error: ",e);
    }
}

getJokes();