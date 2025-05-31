document.addEventListener("DOMContentLoaded", function() 
{
  let thing = document.createElement('h1');
  thing.innerHTML = "Бычков Дмитрий Николаевич";
  document.body.appendChild(thing);

  let thing2 = document.createElement('div');
  document.body.appendChild(thing2);
  thing2.style.width = '300px';
  thing2.style.margin = '0 auto'
  
  thing = document.createElement('h2');
  thing.innerHTML = "Группа 231";
  thing2.appendChild(thing);

  

  thing = document.createElement('a');
  thing.href = "lab1/calculator.html";
  thing.innerHTML = "посчитать";
  thing2.appendChild(thing);

thing = document.createElement('p');
  thing2.appendChild(thing);

    thing = document.createElement('a');
  thing.href = "lab2/Todo.html";
  thing.innerHTML = "Записать";
    thing2.appendChild(thing);
});