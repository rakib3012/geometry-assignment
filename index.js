

/// this is the input field value getting function....
function inputFieldValue(id){
    const inputField = document.getElementById(id);
    const inputFieldStrValue = inputField.value ;

        inputField.value = '' ; // input field clearing.......

    const inputFieldIntValue = parseFloat(inputFieldStrValue);
    return inputFieldIntValue
    
}


// this is input field value checking function.....
function fieldValueCheck(a , b){
    if(isNaN(a && b)){
        alert('please enter a number');
        return;
    }
}

function setResult(id, value){
    const setResultElement = document.getElementById(id);
    setResultElement.innerText = value;
}



//Triangle area calculating......
document.getElementById('tri-btn').addEventListener('click', function(){
    
const land = inputFieldValue('tri-input')
    console.log(land);

    const hight = inputFieldValue('tri-input2')
    console.log(hight)

    fieldValueCheck(land,hight);  /// input value checking is it number or not!!   it id a function which is creating top of the file.....
   

    const triArea = 0.5 * land * hight ;
    console.log(triArea)
    setResult('triangle', triArea);
     

})

//Triangle area calculating......End...

//Rectangle area calculating...Start...

document.getElementById('rect-btn').addEventListener('click', function(){
   const w =  inputFieldValue('rect-input');
   const i = inputFieldValue('rect-input2');
   fieldValueCheck(w,i) ;     /// input value checking is it number or not!!   it id a function which is creating top of the file.....
   const rectArea = w * i;
   console.log(rectArea)
   setResult('rectangle', rectArea);
   
})

//Rectangle area calculating...End...

//Parallelogram area calculating...Start...
document.getElementById('para-btn').addEventListener('click', function(){
    const b =  inputFieldValue('para-input');
    const h = inputFieldValue('para-input2');
    fieldValueCheck(b,h) ;     /// input value checking is it number or not!!   it id a function which is creating top of the file.....
    const paraArea = b * h;
    console.log(paraArea)
   setResult('parallelogram', paraArea);

 })
//Parallelogram area calculating...End...

//Rhombus area calculating...Start...
 
 document.getElementById('romb-btn').addEventListener('click', function(){
    const d1 =  inputFieldValue('romb-input');
    const d2 = inputFieldValue('romb-input2');
    fieldValueCheck(d1,d2) ;     /// input value checking is it number or not!!   it id a function which is creating top of the file.....
    const rombArea = 0.5 * d1 * d2 ;
    console.log(rombArea)
   setResult('rhombus', rombArea);

 })
//Rhombus area calculating...End...

//Pentagon area calculating...Start...

 
 document.getElementById('pent-btn').addEventListener('click', function(){
    const p =  inputFieldValue('pent-input');
    const b = inputFieldValue('pent-input2');
    fieldValueCheck(p,b) ;     /// input value checking is it number or not!!   it id a function which is creating top of the file.....
    const pentArea = 0.5 * p * b;
    console.log(pentArea)
   setResult('pentagon', pentArea);

 })
 
 document.getElementById('elli-btn').addEventListener('click', function(){
    const a =  inputFieldValue('elli-input');
    const b = inputFieldValue('elli-input2');
    fieldValueCheck(a,b) ;     /// input value checking is it number or not!!   it id a function which is creating top of the file.....
    const elliArea = 3.14 * a * b;
    console.log('elliArea', elliArea)
   setResult('Ellipse', elliArea);

 })
 
  
 




