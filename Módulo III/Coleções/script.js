//Set:
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
    
}

console.log(valoresUnicos(meuArray));



//Maps:
/* function getAdmins(map) {
    let admins = [];
    for([key, value] of Map) {
        if(value === 'Admin') {
        admins.push(key); 
        } 
    }
    return admins;

}

const usuarios = new Map ();

usuarios.set('Luiz', 'Admin');
usuarios.set('Helena', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'User');

console.log(getAdmins(usuarios)); */