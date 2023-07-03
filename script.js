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

function getAverage(gradeAvg = Number(), gradeTotalWeight = Number(), i = Number(), nextGradeWeight = Number()){
  return ((gradeAvg * gradeTotalWeight + i * nextGradeWeight) / (gradeTotalWeight + nextGradeWeight))

}

function getResults() {
  inputs = values()

  if(inputs.gradeAvg && inputs.gradeTotalWeight && inputs.nextGradeWeight && inputs.targetGradePercentage) {

    let result = 0;

    for(let i = 0; i <= 101; i++){
      result = getAverage(inputs.gradeAvg, inputs.gradeTotalWeight, i, inputs.nextGradeWeight)
      // console.log(`i: ${i} result: ${result} true: ${result >= inputs.targetGradePercentage}`) 

      if(result >= inputs.targetGradePercentage) {
        inputs.results.innerText = `You need at least ${i} to pass.`
        return i
        break;
      } 
      else if(i === 101) {
        inputs.results.innerText = `I'm afraid you're a bit screwed 😆`
        return -1
        break;
      } 
    }
  }  
  else {
    inputs.results.innerText = `Please fill out all of the fields.`
  }     
}
function gradeFixer() {
  let inputs = values()
  console.log(inputs)
  
  let predictions = []
  let average = Number()
  let maxWeight = 10

  for (weight = 1; weight <= maxWeight; weight++) {
    for(i = 0; i <= 101; i++) {
      average = getAverage(inputs.gradeAvg, inputs.gradeTotalWeight, i, weight)

      if(i == 101) {
        predictions[weight - 1] = -1
      }

      else if(i <= 100 && average >= inputs.targetGradePercentage){
        console.log(i)
        predictions[weight - 1] = i
        break;
      }
    }
  }
  inputs.results.innerText = `You will need at least: ${predictions} for weights 1-10 `
  return predictions
}