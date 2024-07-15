import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../components/Props";

const nombre2 = 'Laura';
const frutas = ['Manzana', 'Bananas', 'Palta', 'Naranjas'];

const equipos =['Argentina', 'Colombia','Uruguay', 'Canadá'];

const mostrarValor = valor =>{
    console.log(valor)
}

const Ejemplo1 = (props) =>{
    return(
        <div>
            <h1>Ejemplos de Propiedades</h1>
            <EjemploProps1 nombre='Alma' />
            <EjemploProps1 nombre= {nombre2} />
            <EjemploProps2 elementos={frutas} />
            <EjemploProps2 elementos= {equipos} />
            <EjemploProps3 titulo='Hola soy el titulo' subtitulo='subtitulo bien grande!' cuerpo='Hola soy el contenido de esta noticia.' />
            <EjemploProps4 cambiarvalor={mostrarValor} />
            <EjemploProps5 eventoClick={mostrarValor} />
        </div>
    )
}

export default Ejemplo1;