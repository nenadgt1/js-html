var numbersArray = [2, 4, 5, 3, 1];

function printNumbersAndSum() {
  var numberList = document.getElementById('number-list');
  var sumElement = document.getElementById('sum');
  var equationElement = document.getElementById('equation');

  numbersArray.forEach(function(number) {
    var listItem = document.createElement('li');
    listItem.textContent = number;
    numberList.appendChild(listItem);
  });

  var sum = numbersArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  sumElement.textContent = 'Sum: ' + sum;
  equationElement.textContent = 'Equation: ' + numbersArray.join(' + ') + ' = ' + sum;
}

printNumbersAndSum();
