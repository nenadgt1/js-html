function createTable(rows, columns) {
  var table = document.createElement('table');

  for (var i = 1; i <= rows; i++) {
    var row = table.insertRow();

    for (var j = 1; j <= columns; j++) {
      var cell = row.insertCell();
      cell.textContent = 'Row-' + i + ' Column-' + j;
    }
  }

  document.body.appendChild(table);
}

var rows = prompt('Enter the number of rows:');
var columns = prompt('Enter the number of columns:');

if (!isNaN(rows) && !isNaN(columns) && rows > 0 && columns > 0) {
  // Call the function to create the table
  createTable(parseInt(rows), parseInt(columns));
} else {
  alert('Please enter valid numbers for rows and columns.');
}
