const preguntas = [
    {
        titulo: "Elige el paisaje que más te guste",
        opciones: [
            {respuesta: "Sabana africana" , puntos: 2, img: '/imgTestAnimal/flora-sabana.jpg'},
            {respuesta: "Flores Tropicales" , puntos: 3,img: '/imgTestAnimal/flores-tropicales.jpg'},
            {respuesta: "Montañas nevadas" , puntos: 0, img: '/imgTestAnimal/montañas-nevadas.jpg'},
            {respuesta: "Bosque de coníferas" , puntos: 1, img: '/imgTestAnimal/bosque-coniferas.jpg'},
        ]
    },
    {
        titulo: "¿Te sientes conectado con los animales?",
        opciones: [
            {respuesta: "Nop" , puntos: 1, img: '/imgTestAnimal/negacion.jpg'},
            {respuesta: "Por supuesto!" , puntos: 3, img: '/imgTestAnimal/aprobacion.jpg'},
            {respuesta: "Bueno, eso depende.." , puntos: 2, img: '/imgTestAnimal/pensando.jpg'},
            {respuesta: "Me gustan más que los humanos" , puntos: 0, img: '/imgTestAnimal/acarisiando.jpg'},
        ]
    },
    {
        titulo: "¿Cómo te describirias a ti mismo?",
        opciones: [
            {respuesta: "Inteligente" , puntos: 1, img: '/imgTestAnimal/inteligente.jpg'},
            {respuesta: "Hermoso" , puntos: 2, img: '/imgTestAnimal/hermoso.jpg'},
            {respuesta: "Suertudo" , puntos: 3, img: '/imgTestAnimal/suerte.jpg'},
            {respuesta: "Trabajador" , puntos: 0, img: '/imgTestAnimal/trabajador.jpg'},
        ]
    },
    {
        titulo: "Elige el cielo y las nubes que más te gusten",
        opciones: [
            {respuesta: "Delicado amanecer" , puntos: 3, img: '/imgTestAnimal/amanecer.jpg'},
            {respuesta: "Nubes tormentosas" , puntos: 1, img: '/imgTestAnimal/tormenta.jpg'},
            {respuesta: "Aterdecer romántico" , puntos: 2, img: '/imgTestAnimal/atardecer.png'},
            {respuesta: "Cielo estellado" , puntos: 0, img: '/imgTestAnimal/estrellado.jpg'},
        ]
    },
    {
        titulo: "¿Qué haces si ves una araña en tu casa?",
        opciones: [
            {respuesta: "Grito y salgo corriendo" , puntos: 0, img: '/imgTestAnimal/espantado.jpg'},
            {respuesta: "Nada, la dejo ir" , puntos: 1, img: '/imgTestAnimal/duda.jpg'},
            {respuesta: "Le tomo una foto" , puntos: 2, img: '/imgTestAnimal/tomandofoto.jpg'},
            {respuesta: "Le doy un nombre" , puntos: 3, img: '/imgTestAnimal/araña.jpg'},
        ]
    },
    {
        titulo: "¿Qué sabor prefieres?",
        opciones: [
            {respuesta: "Salado" , puntos: 1, img: '/imgTestAnimal/sal.jpeg'},
            {respuesta: "Dulce" , puntos: 0, img: '/imgTestAnimal/dulce.jpg'},
            {respuesta: "Picante" , puntos: 2, img: '/imgTestAnimal/picante.jpg'},
            {respuesta: "Neutral" , puntos: 3, img: '/imgTestAnimal/neutral.jpg'},
        ]
    },
    {
        titulo: "¿Qué es lo que más te asusta?",
        opciones: [
            {respuesta: "Mis propios pensamientos" , puntos: 1, img: '/imgTestAnimal/pensamientos.jpeg'},
            {respuesta: "La oscuridad" , puntos: 2, img: '/imgTestAnimal/oscuridad.jpg'},
            {respuesta: "Ser un fracaso" , puntos: 3, img: '/imgTestAnimal/fracaso.jpg'},
            {respuesta: "Insectos" , puntos: 0, img: '/imgTestAnimal/insecto.jpg'},
        ]
    },
    {
        titulo: "¿Te sientes como un líder?",
        opciones: [
            {respuesta: "No, pero ¿Quién, si no yo?" , puntos: 2, img: '/imgTestAnimal/pensando2.jpg'},
            {respuesta: "Nunca, ¡ese es el peor trabajo del mundo!" , puntos: 1, img: '/imgTestAnimal/alto.jpg'},
            {respuesta: "Siempre, me gusta controlarlo todo" , puntos: 3, img: '/imgTestAnimal/lider.jpg'},
            {respuesta: "Ojalá tuviera suficiente coraje" , puntos: 0, img: '/imgTestAnimal/agotado.jpg'},
        ]
    },
    {
        titulo: "Si le pidieramos a una persona sercana a ti que te describiera con un solo emoji, ¿Cuál seria?",
        opciones: [
            {respuesta: "Risa" , puntos: 3, img: '/imgTestAnimal/sonrisa.jpg'},
            {respuesta: "Llanto" , puntos: 0, img: '/imgTestAnimal/llanto.jpg'},
            {respuesta: "Cara de póquer" , puntos: 1, img: '/imgTestAnimal/poquer.jpg'},
            {respuesta: "Corazón" , puntos: 2, img: '/imgTestAnimal/corazon.png'},
        ]
    },
    {
        titulo: "¿Preferirías trabajar en grupo o solo?",
        opciones: [
            {respuesta: "Solo" , puntos: 3, img: '/imgTestAnimal/solo.jpg'},
            {respuesta: "En grupo" , puntos: 2, img: '/imgTestAnimal/grupo.jpeg'},
            {respuesta: "Depende de la tarea" , puntos: 0, img: '/imgTestAnimal/dependetarea.png'},
            {respuesta: "Prefiero trabajar en pareja" , puntos: 1, img: '/imgTestAnimal/trabajopareja.jpg'},
        ]
    },
    {
        titulo: "¿Que género musical te gusta más?",
        opciones: [
            {respuesta: "Clásica" , puntos: 0, img: '/imgTestAnimal/clasica.jpeg'},
            {respuesta: "Rap" , puntos: 3, img: '/imgTestAnimal/rap.jpg'},
            {respuesta: "Disco" , puntos: 2, img: '/imgTestAnimal/disco.jpg'},
            {respuesta: "Rock" , puntos: 1, img: '/imgTestAnimal/rock.jpg'},
        ]
    },
    {
        titulo: "Si pudieras hacer realidad un deseo, ¿Cuál seria?",
        opciones: [
            {respuesta: "Ser inmortal" , puntos: 0, img: '/imgTestAnimal/inmortal.jpg'},
            {respuesta: "Volverse super hermoso" , puntos: 2, img: '/imgTestAnimal/hermoso2.jpg'},
            {respuesta: "Volverse superrico" , puntos: 1, img: '/imgTestAnimal/rico.jpeg'},
            {respuesta: "Hacer feliz a todas las criaturas del universo" , puntos: 3, img: '/imgTestAnimal/equipo2.jpg'},
        ]
    },
    {
        titulo: "Si pudieras elegir solo 1 de estos 4 trabajos, ¿Cuál seria?",
        opciones: [
            {respuesta: "Bombero" , puntos: 1, img: '/imgTestAnimal/bombero.jpg'},
            {respuesta: "Diseñador de moda" , puntos: 2, img: '/imgTestAnimal/deseñador.jpg'},
            {respuesta: "Piloto" , puntos: 0, img: '/imgTestAnimal/piloto.jpg'},
            {respuesta: "Chef" , puntos: 3, img: '/imgTestAnimal/chef.jpg'},
        ]
    },
    {
        titulo: "¿Eres seguro?",
        opciones: [
            {respuesta: "Trato de serlo" , puntos: 3, img: '/imgTestAnimal/tratoconfianza.jpg'},
            {respuesta: "No" , puntos: 1, img: '/imgTestAnimal/negacion.jpg'},
            {respuesta: "Si! soy el mas seguro" , puntos: 2, img: '/imgTestAnimal/confianza.jpg'},
            {respuesta: "Tiendo a pensar demasiado cada acción" , puntos: 0, img: '/imgTestAnimal/celebrando.jpg'},
        ]
    },
    {
        titulo: "¿Qué haces normalmente cuando te sientes molesto?",
        opciones: [
            {respuesta: "Hablo con mi teraputa" , puntos: 0, img: '/imgTestAnimal/terapeuta.jpg'},
            {respuesta: "Salgo al aire libre y practico algun deporte" , puntos: 1, img: '/imgTestAnimal/airelibre.jpg'},
            {respuesta: "Escucho música" , puntos: 3, img: '/imgTestAnimal/musica.jpg'},
            {respuesta: "Voy de compras" , puntos: 2, img: '/imgTestAnimal/compras.jpg'},
        ]
    },
    {
        titulo: "Elige un elemento",
        opciones: [
            {respuesta: "Aire" , puntos: 0, img: '/imgTestAnimal/aire.jpg'},
            {respuesta: "Fuego" , puntos: 2, img: '/imgTestAnimal/fuego.jpg'},
            {respuesta: "Agua" , puntos: 3, img: '/imgTestAnimal/agua.jpg'},
            {respuesta: "Tierra" , puntos: 1, img: '/imgTestAnimal/tierra.jpg'},
        ]
    },
    {
        titulo: "¿Te llevas bien con tu familia?",
        opciones: [
            {respuesta: "No realmente, me cuido solo" , puntos: 1, img: '/imgTestAnimal/leyendosolo.jpg'},
            {respuesta: "Si! no puedo imaginar mi vida sin ellos" , puntos: 2, img: '/imgTestAnimal/familia.jpg'},
            {respuesta: "Compartimos algunos intereses similares" , puntos: 3, img: '/imgTestAnimal/algunosintereses.jpg'},
            {respuesta: "No tengo familia" , puntos: 0, img: '/imgTestAnimal/lobosolitario.jpg'},
        ]
    },
    {
        titulo: "Elige una prenda de vestir",
        opciones: [
            {respuesta: "Sombrero" , puntos: 0, img: '/imgTestAnimal/sombrero.jpg'},
            {respuesta: "Abrigo billante" , puntos: 2, img: '/imgTestAnimal/abrigo.jpg'},
            {respuesta: "Jeans" , puntos: 1, img: '/imgTestAnimal/jeans.jpg'},
            {respuesta: "Bañador" , puntos: 3, img: '/imgTestAnimal/bañadores.jpg'},
        ]
    },
    {
        titulo: "Elige el estilo de baile que más te guste",
        opciones: [
            {respuesta: "Ballet" , puntos: 0, img: '/imgTestAnimal/ballet.jpg'},
            {respuesta: "Bailarina contemporánea" , puntos: 3, img: '/imgTestAnimal/contemporanea.jpg'},
            {respuesta: "Tango" , puntos: 1, img: '/imgTestAnimal/tango.jpg'},
            {respuesta: "Carnaval brasileño" , puntos: 2, img: '/imgTestAnimal/carnaval.jpg'},
        ]
    },
    {
        titulo: "¿Cuál te representa",
        opciones: [
            {respuesta: "Acogedor, divertido, amable" , puntos: 3, img: '/imgTestAnimal/divertida.jpg'},
            {respuesta: "Modesto, leal, confiable" , puntos: 1, img: '/imgTestAnimal/leal.jpg'},
            {respuesta: "Descuidado, aventurero, espontáneo" , puntos: 0, img: '/imgTestAnimal/aventurera.jpg'},
            {respuesta: "Hermoso, hermoso, hermoso" , puntos: 2, img: '/imgTestAnimal/hermoso3.jpg'},
        ]
    },
    {
        titulo: "Elige una flor",
        opciones: [
            {respuesta: "Lirios" , puntos: 1, img: '/imgTestAnimal/lirios.jpg'},
            {respuesta: "Margaritas" , puntos: 3, img: '/imgTestAnimal/margaritas.jpg'},
            {respuesta: "Peonías" , puntos: 2, img: '/imgTestAnimal/peonias.jpg'},
            {respuesta: "Narciso" , puntos: 0, img: '/imgTestAnimal/narcisos.jpg'},
        ]
    },
    {
        titulo: "¿Qué mascota preferirías tener",
        opciones: [
            {respuesta: "Gato" , puntos: 3, img: '/imgTestAnimal/gato.jpg'},
            {respuesta: "Perro" , puntos: 2, img: '/imgTestAnimal/perro.jpg'},
            {respuesta: "Pájaro" , puntos: 0, img: '/imgTestAnimal/pajaro.jpg'},
            {respuesta: "Iguana, obviamente" , puntos: 1, img: '/imgTestAnimal/iguana.jpg'},
        ]
    }
]

export default preguntas;