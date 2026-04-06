//Q-Create a nested array to show the following tic-tac-toe game state.

// *|   | 0  
//  | * |  
// 0|   |* 

//2D array me convert krna to kese krenge- character array ki help se X or O or baakhi jgha null place kr denge hm
 let game=[['X',null,"O"],[null,"X",null],["O",null,"X"]];
 console.log(game);
 //task 1 row me null ko hta ke 'O' add krna to-changes apply kr diye hmne nested aarya me bhi ese changes apply krna possible hota h nested araay me
 console.log(game[0][1]=('O'));
 console.log(game);