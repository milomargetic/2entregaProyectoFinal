const friends = ['Marcelo', 'Juan', 'Daniel'];

// añadir elementos
const newLength = friends.push('Esteban');
console.log(friends);
console.log(newLength);

friends.unshift('Juan');
console.log(friends);

// quitar elementos
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Esteban'));
console.log(friends.indexOf('Marcelo'));

friends.push(23);
console.log(friends.includes('Esteban'));
console.log(friends.includes('Marcelo'));
console.log(friends.includes(23));

if (friends.includes('Esteban')) {
  console.log('Tenés un amigo que se llama Esteban');
}


const form = document.querySelector('#formulario');

const enviarFormulario = (event) => {
    event.preventDefault();

    const {name,email,password} = event.target

    console.log(name.value, email.value, password.value);

    if (name.value.length === 0) alert("el nombre no es válido");

};

form.addEventListener('submit', enviarFormulario);
