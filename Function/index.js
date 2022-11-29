//Task-1

function fullName(){
      console.log("Ibrahimova", "Suseniber")
}
fullName()
 

//Task-2

let FullName = (firstName,LastName)=>{
    return(`${firstName},${LastName}`)
}
       console.log('Suseniber', 'Ibrahimova')



       
// Task-3

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}
let l = 5
let w = 8
console.log(perimeterOfRectangle(l,w))


//Task-4

let BodyMass = (weight,height)=>{
    let bmi = weight/(height*height);
    if(bmi<18.5){
       console.log("Underweight"); 
    }
    else if(bmi>18.5 && bmi<24.9){
       console.log("normal"); 
    }
    else if(bmi>25 && bmi<29.9){
       console.log("Overweight"); 
    }
    else{
       console.log("obese "); 
    }
    return " Body Mass:"+ bmi;
   
   
}
console.log(BodyMass(90,1.60));

//Task-5

let findMax = (a,b,c)=>{
    if(a>b && a>c){
        return (`Max number of ${a}`);
    }
    else if(b>a && b>c){
        return(`Max number of ${b}`);
    }
    else{
        return(`Max number of ${c}`);
    }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0,-10,-2));


// Task-6

function reverseArray (array = (['A', 'B', 'C'])) {

    let start = 0;
    let end = array.length-1;
    while (start<end) {
        let temp = array[start];
        array[start]=array[end];
        array[end]=temp;
        start=+1;
        end=-1    
}
return (array );
}

console.log(reverseArray(['A', 'B', 'C']));






 //Task-7

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
   console.log(pow(3,3));








    






  



