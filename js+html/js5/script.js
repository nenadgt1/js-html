function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;
}

Book.prototype.displayInfo = function() {
  if (this.readingStatus) {
    return "Already read '" + this.title + "' by " + this.author + ".";
  } else {
    return "You still need to read '" + this.title + "' by " + this.author + ".";
  }
};

function displayReadingStatus() {
  var title = document.getElementById('titleInput').value;
  var author = document.getElementById('authorInput').value;
  var readingStatusInput = document.getElementById('readingStatusInput').value.toLowerCase();
  var readingStatus = readingStatusInput === 'true';

  if (title && author !== undefined && (readingStatusInput === 'true' || readingStatusInput === 'false')) {
    var book = new Book(title, author, readingStatus);

    var outputDiv = document.getElementById('output');
    outputDiv.textContent = book.displayInfo();
  } else {
    alert('Please enter valid values for title, author, and reading status (true/false).');
  }
}
