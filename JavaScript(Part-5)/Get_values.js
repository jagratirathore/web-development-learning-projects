//twitter me hmara itna sara data store h single post,ya single thread pe using Object literals-

const post = {
    username: "@jagrati",//jisne post kiya uska name
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]//itne logo ko tag kra h hmne hmari post se
};

//console pe bhi kr skte h pr hm file me kr rhe h


//get krenge saari key ki values ko using [] or do operator-
console.log(post);

//post ke andar jitna content h uski value get krenge using -[]
console.log(post["content"]);//or agr console pe likhenge to diect ese-post["content"];

//using dot operator(.)-access krenge value ko
console.log(post.content);

//.ke baad "" nhi lgana h key ko kbhi bhi dot operator me serf square bracket syntax me lge ga-error de dega
//console.log(post."content");//error

console.log(post.likes);
console.log(post.reposts);
console.log(post.username);

console.log(post["tags"]);//variable ke case me adhiktar [] bracket use krte h get krne ke liye value ko
