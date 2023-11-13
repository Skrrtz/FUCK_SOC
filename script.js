document.addEventListener('DOMContentLoaded', function () {
    const boxesContainer = document.querySelector('.boxes-container');

    addBox('Dynamite', 'dynamite.txt');
    addBox('Murder', 'murder.txt');

    addBox('Fuck someones life up', 'fucksome1life.txt');
    addBox('obedience', 'obedience.txt');
    addBox('Shoot Up School', 'powschool.txt');

    addBox('Meth (noob steps)', 'meth.txt');

    addBox('Strangle', 'strangle.txt');

    addBox('Arson', 'arson.txt');

    addBox('How to escape from the law', 'hide.txt');
    addBox('How to kill some1 and blame it on some1 else', 'killsome1andhide.txt');



    function addBox(title, contentFile) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.innerHTML = `
        <h2>${title}</h2>
        <button onclick="openBox('${title}', '${contentFile}')">Click to Read</button>
      `;
      boxesContainer.appendChild(box);
    }
  });
  
  function openBox(title, contentFile) {
    var overlay = document.getElementById('overlay');
    var contentBox = document.getElementById('content');

    fetch(contentFile)
      .then(response => response.text())
      .then(text => {
        contentBox.innerHTML = `
          <h2>${title}</h2>
          <button onclick="closeBox()">Close</button>
          <p>${text}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching content:', error);
      });
  
    overlay.style.display = 'flex';
    contentBox.style.display = 'block';
  }
  
  function closeBox() {
    var overlay = document.getElementById('overlay');
    var contentBox = document.getElementById('content');
    overlay.style.display = 'none';
    contentBox.style.display = 'none';
  
    contentBox.innerHTML = '';
  }
  
