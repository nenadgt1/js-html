function Animal(name, kind) {
  this.name = name;
  this.kind = kind;
}

Animal.prototype.speak = function(message) {
  console.log(this.kind + ' ' + this.name + ' says: \'' + message + '\'');
};

function createAnimal() {
  var name = document.getElementById('nameInput').value;
  var kind = document.getElementById('kindInput').value;

  if (name && kind) {
    var newAnimal = new Animal(name, kind);

    var message = prompt('Enter a message:');

    newAnimal.speak(message);

    var outputDiv = document.getElementById('output');
    outputDiv.textContent = newAnimal.kind + ' ' + newAnimal.name + ' says: \'' + message + '\'';
  } else {
    alert('Please enter values for name and kind.');
  }
}
