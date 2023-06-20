console.log('working');
function isSpacebar() {
  if(event.key === 'Enter') {
    getResults()
  }
}
function values() { 
  let inputs = {
    gradeAvg: Number(document.querySelector('.grade-avg').value),
    gradeTotalWeight: Number(document.querySelector('.grade-total-weight').value),
    nextGradeWeight: Number(document.querySelector('.next-grade-weight').value),
    targetGradePercentage: Number(document.querySelector('.target-grade-percentage').value),
    results: document.querySelector('.result')
  }
  return inputs;
}

function getResults() {
  inputs = values()

  if(inputs.gradeAvg && inputs.gradeTotalWeight && inputs.nextGradeWeight && inputs.targetGradePercentage) {

    let result = 0;

    for(let i = 0; i <= 101; i++){
      result = ((inputs.gradeAvg * inputs.gradeTotalWeight) + (i * inputs.nextGradeWeight)) / (inputs.gradeTotalWeight + inputs.nextGradeWeight)
      console.log(`i: ${i} result: ${result} true: ${result >= inputs.targetGradePercentage}`) 

      if(result >= inputs.targetGradePercentage) {
        inputs.results.innerText = `You need at least ${i} to pass.`
        break;
      } 
      else if(i === 101) {
        inputs.results.innerText = `I'm afraid you're a bit screwed XD`
        break;
      } 
    }
  }  
  else {
    inputs.results.innerText = `Please fill out all of the fields.`
  }     
}
function gradePredicter() {

}
/*
Switch from next text predictor / Grade fixer
*/