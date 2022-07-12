// - Crea una variable con tu nombre
const nombre = "Tony";
// - Crea una variable con tu apellido
const apellido = "Baldessari";
// - Crea un objeto con tu nombre y tu apellido

const obj = {nombre: nombre, apellido: apellido};

console.log(obj);

// - Almacena el objeto anterior en la SessionStorage

//sessionStorage.setItem("objeto-session", obj);

// - Almacena el objeto anterior en la LocalStorage

//localStorage.setItem("objeto", obj);

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

//document.cookie = "nombre-cookie=obj;expires=" + new Date(2022,6,12,15,48).toUTCString();