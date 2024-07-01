function calculateGrade(inputs, i = 0) {
  if (i > 101) {
    inputs.results.innerText = `Tak z tohohle se už nedostaneš...`;
    return;
  }

  let result = getAverage(inputs.gradeAvg, inputs.gradeTotalWeight, i, inputs.nextGradeWeight);

  if (result >= inputs.targetGradePercentage) {
    inputs.results.innerText = `Potřebuješ nejméně ${i}`;
    return;
  }

  return calculateGrade(inputs, i + 1);
}

function getAverage(gradeAvg, gradeTotalWeight, nextGrade, nextGradeWeight) {
  return ((gradeAvg * gradeTotalWeight + nextGrade * nextGradeWeight) / (gradeTotalWeight + nextGradeWeight));
}

function parseNumberInput(value) {
  value = value.replace(',', '.');
  value = value.replace('-', '');
  return parseFloat(value);
}

function getMinGrade() {
  let inputs = {
    gradeAvg: parseNumberInput(document.getElementById('grade-avg-1').value),
    gradeTotalWeight: parseNumberInput(document.getElementById('grade-total-weight-1').value),
    nextGradeWeight: parseNumberInput(document.getElementById('next-grade-weight-1').value),
    targetGradePercentage: parseNumberInput(document.getElementById('target-grade-percentage').value),
    results: document.querySelector('.minGradeResult')
  };

  if (!isNaN(inputs.gradeAvg) && !isNaN(inputs.gradeTotalWeight) && !isNaN(inputs.nextGradeWeight) && !isNaN(inputs.targetGradePercentage)) {
    calculateGrade(inputs);
  } else {
    inputs.results.innerText = `Prosím vyplň všechny pole.`;
  }
}

function getAverageNew() {
  let inputs = {
    gradeAvg: parseNumberInput(document.getElementById('grade-avg-2').value),
    gradeTotalWeight: parseNumberInput(document.getElementById('grade-total-weight-2').value),
    nextGradeWeight: parseNumberInput(document.getElementById('next-grade-weight-2').value),
    nextGrade: parseNumberInput(document.getElementById('next-grade').value),
    results: document.querySelector('.new-average')
  };

  function calculateAverage(inputs) {
    return (inputs.gradeAvg * inputs.gradeTotalWeight + inputs.nextGrade * inputs.nextGradeWeight) / (inputs.gradeTotalWeight + inputs.nextGradeWeight);
  }

  if (!isNaN(inputs.gradeAvg) && !isNaN(inputs.gradeTotalWeight) && !isNaN(inputs.nextGradeWeight) && !isNaN(inputs.nextGrade)) {
    let newAverage = calculateAverage(inputs).toFixed(2);
    console.log('New Average:', newAverage); // Debugging log
    inputs.results.innerText = `Nový průměr je ${newAverage}`;
  } else {
    inputs.results.innerText = `Prosím vyplň všechny pole.`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('button')[0].addEventListener('click', getMinGrade);
  document.querySelectorAll('button')[1].addEventListener('click', getAverageNew);

  const inputFields1 = document.querySelectorAll('#grade-avg-1, #grade-total-weight-1, #next-grade-weight-1, #target-grade-percentage');
  inputFields1.forEach(input => {
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        getMinGrade();
      }
    });
  });

  const inputFields2 = document.querySelectorAll('#grade-avg-2, #grade-total-weight-2, #next-grade-weight-2, #next-grade');
  inputFields2.forEach(input => {
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        getAverageNew();
      }
    });
  });
});
