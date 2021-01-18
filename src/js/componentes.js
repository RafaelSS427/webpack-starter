import '../css/componentes.css';

export const saludo = ( name ) => {
    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola ${name}, sos genial!`;
    document.body.append(h1);
}