const fs = require('fs');

const content = 'Some content!';

fs.readFile('wolcome.txt', content, err => {
  if (err) {
    console.error(err);
  }


  // fichier écrit avec succès
});
