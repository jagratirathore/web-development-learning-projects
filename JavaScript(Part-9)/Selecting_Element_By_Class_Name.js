//3no img dikh jaayegi class="oldImg" krenge to or return hongi hmko HTMLCollection 0:,1:,2 index kr ke
console.log(document.getElementsByClassName("oldImg"));//HTMLCollection(3) [img.oldImg, img.oldImg, img.oldImg]

//agr hmko index 0 vaala object chaiye to-[0]
console.log(document.getElementsByClassName("oldImg")[0]);//0 index vaali img ki link aa jaayegi hmare pass

//agr hmko index 1 vaala object chaiye to-[1]
console.log(document.getElementsByClassName("oldImg")[1]);//1 index vaali img ki link aa jaayegi hmare pass

//esko hm variable ke and bhi access kr va skte h
let smallImges = document.getElementsByClassName("oldImg");
 for(let i=0; i<smallImges.length; i++){
    console.dir(smallImges[i]);//hr ek line pe img aa jaayegi
 }
 
 //hr ek line pe img aa jaayegi or sb img ko expand kr ke souce bhi check kr skte h
 let smallImges1 = document.getElementsByClassName("oldImg");
 for(let i=0; i<smallImges1.length; i++){
    console.dir(smallImges1[i].src);
 }
 //file:///D:/course/Web%20Development/JavaScript(Part-9)/assets/creation_1.png
// file:///D:/course/Web%20Development/JavaScript(Part-9)/assets/creation_2.jpeg
// file:///D:/course/Web%20Development/JavaScript(Part-9)/assets/creation_3.jpeg
 
 // 3 no img changed kr di ek sath piderman vaali kr di 

 let smallImges2 = document.getElementsByClassName("oldImg");
 for(let i=0; i<smallImges2.length; i++){
    smallImges2[i].src = "assets/spiderman_img.png";
    console.log(`values of image no. ${i} is changed`);
 }
 //values of image no. 0 is changed.
 //values of image no. 1 is changed.
 //values of image no. 2 is changed.

 //null nhi aata null id me aata tha ,agr hm khali collection dete to className me vo htmlCollection ki length:0 de dete
 console.log(document.getElementsByClassName("asscf"));//HTMLCollection [] length:0