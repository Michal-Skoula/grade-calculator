function isSpacebar() {
  if(event.key === 'Enter') {
    getResults()
  }  
}
function getResults() {
  
  const gradeAvg = Number(document.querySelector('.grade-avg').value)
  const gradeTotalWeight = Number(document.querySelector('.grade-total-weight').value)
  const nextGradeWeight = Number(document.querySelector('.next-grade-weight').value)
  const targetGradePercentage = Number(document.querySelector('.target-grade-percentage').value)
  let results = document.querySelector('.result')
  let result

  if(gradeAvg && gradeTotalWeight && nextGradeWeight && targetGradePercentage) {

    // console.log(`Grade avg: ${gradeAvg} \nGrade Total Weight: ${gradeTotalWeight}\nNext Grade Weight: ${nextGradeWeight}\nTarget Grade %: ${targetGradePercentage}`)

    for(let i = 0; i <= 101; i++){
      result = ((gradeAvg * gradeTotalWeight) + (i * nextGradeWeight)) / (Number(gradeTotalWeight)+Number(nextGradeWeight))        

      if(result > targetGradePercentage) {
        results.innerText = `You need at least ${i} to pass.`
        break;
      } 
      else if(i === 101) {
        results.innerText = `Yeah you\'re not fixing this man XD`
        break;
      } 
    }
  }
  
  else {
    results.innerText = `Please fill out all of the fields.`
  }     
}