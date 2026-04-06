for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
} 
//note-phele pura inner loop dry run hoga uske baad inner loop ki condition false hogi uske baad vaaps outer loop pe jump krenge hm 
//outer loop three baar print hoga
//1
//2
//3
//1
//2
//3
//1
//2
//3