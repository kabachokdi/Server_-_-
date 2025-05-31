document.addEventListener("DOMContentLoaded", function() 
{
  let thing = document.createElement('h1');
  thing.innerHTML = "Бычков Дмитрий Николаевич";
  document.body.appendChild(thing);

  thing = document.createElement('h2');
  thing.innerHTML = "Группа 231";
  document.body.appendChild(thing);

  

  thing = document.createElement('a');
  thing.href = "lab1/calculator.html";
  thing.innerHTML = "посчитать";
  document.body.appendChild(thing);

thing = document.createElement('p');
  document.body.appendChild(thing);
  
    thing = document.createElement('a');
  thing.href = "lab2/Todo.html";
  thing.innerHTML = "Записать";
    document.body.appendChild(thing);
});