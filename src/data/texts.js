import unidad1 from '/assets/Unidad1.svg'
import unidad2 from '/assets/Unidad2.svg'
import unidad3 from '/assets/Unidad3.svg'
import families from '/assets/families.svg'
import socialPsicology from '/assets/social-psicology.svg'
import rs from '/assets/rs.svg'
import bound from '/assets/bound.svg'


const texts = [
  {
    id: 1,
    title: "La naturaleza afectiva del orden social.",
    author: "Carina Kaplan",
    bibliography: "https://www.conicet.gov.ar/new_scp/detalle.php?id=29219&datos_academicos=yes",
    summary: "El artículo propone que el orden social es profundamente afectivo, aunque esta dimensión ha sido históricamente relegada en la sociología en general y en la sociología de la educación en particular. A partir de las teorías de Norbert Elias y Pierre Bourdieu, Kaplan sostiene que las emociones deben entenderse en relación con estructuras sociales y culturales, y no como simples expresiones individuales o biológicas.",
    image: unidad1,
    genially: "https://view.genially.com/68601b060d87e3d4c3449199/interactive-content-guia-de-estudio "
  },
  {
    id: 2,
    title: "La construcción social de la realidad.",
    author: "Berger, P y Luckmann T",
    bibliography: "https://es.wikipedia.org/wiki/La_construcci%C3%B3n_social_de_la_realidad",
    summary: "En este capítulo, los autores analizan cómo los individuos internalizan la realidad social y construyen su identidad a través de la socialización. Esta internalización convierte el mundo externo en algo subjetivamente vivido y naturalizado. Se distinguen dos tipos de socialización: primaria y secundaria.\nPara que la realidad subjetiva se mantenga, debe reafirmarse constantemente mediante el diálogo cotidiano y la interacción con los demás. La identidad social depende en gran medida de la confirmación de quienes nos rodean (familia, amistades, instituciones).\nFinalmente, el lenguaje es el principal vehículo que construye y sostiene la realidad social. Hablar, narrar y compartir significados no solo expresan lo vivido, sino que le otorgan coherencia y lo hacen real.",
    image: unidad2,
    genially: "https://view.genially.com/68608002edf04c7d19bf9ffc/interactive-content-berger-p-y-luckmann-t-la-construccion-social-de-la-realidad-ed-amorrortu-bsas-1972-capiii "
  },
  {
    id: 3,
    title: "Psicología de las masas y análisis del yo.",
    author: "FREUD, Sigmund",
    bibliography: "https://en.wikipedia.org/wiki/Group_Psychology_and_the_Analysis_of_the_Ego",
    summary: "Freud analiza cómo el comportamiento individual se transforma cuando el sujeto forma parte de una masa o grupo. A través del psicoanálisis, intenta explicar los procesos psicológicos que llevan a los individuos a perder su autonomía y a someterse a una figura de autoridad o a la voluntad del grupo.",
    image: unidad3,
    genially: "https://view.genially.com/68616c1f0d87e3d4c3fe5548/presentation-freud-sigmund-1979-psicologia-de-las-masas-y-analisis-del-yo "
  },
  {
    id: 4,
    title: "Las familias en la escuela.",
    author: "Santillán, Neufeld, Cerletti",
    bibliography: "https://www.researchgate.net/publication/291015076_Escuelas_familias_y_tramas_sociourbanas_entrecruzamientos_en_contextos_de_diversidad_y_desigualdad_social",
    summary: "El texto analiza la relación entre familias y escuela, resaltando su evolución histórica y las tensiones actuales. Cuestiona la idea de una única forma “correcta” de familia y propone reconocer la diversidad familiar. Señala que muchas veces las familias participan activamente, aunque sus formas no sean siempre reconocidas por la institución escolar. Invita a repensar estos vínculos desde una mirada inclusiva y contextualizada.",
    image: families,
    genially: "https://view.genially.com/68607e4e32ecbdcc9d8ace1f/presentation-santillan-neufeld-cerletti-explora-las-familias-en-la-escuela "
  },
  {
    id: 5,
    title: "Introducción: El campo de la Psicología Social.",
    author: "Serge Moscovici",
    bibliography: "https://centrohumanista.edu.mx/biblioteca/files/original/370034935edb721aeff645109abb7793.pdf",
    summary: "Este texto introduce la psicología social como una ciencia que estudia el conflicto y la interacción entre el individuo y la sociedad. Moscovici critica la visión tradicional que separa lo psicológico de lo social y propone un enfoque integrador, en el que ambos niveles se entrelazan permanentemente.\nEl autor destaca que en cada individuo habita una red de relaciones sociales que influye en su manera de pensar, sentir y actuar. Propone un enfoque ternario (individuo – otro – Objeto) que permite comprender mejor los fenómenos sociales, superando el modelo binario sujeto-objeto.",
    image: socialPsicology,
    genially: "https://view.genially.com/6867d51fb83e93339ab7be18/presentation-moscovici-serge-1985-introduccion-el-campo-de-la-psicologia-social"
  },
  {
    id: 6,
    title: "Aproximaciones al concepto de Representación Social.",
    author: "Di Iorio Jorgelina",
    bibliography: "https://www.academia.edu/36618848/Aproximaciones_al_concepto_de_Representacion_Social_pdf",
    summary: "El texto aborda el concepto de Representación Social (RS) como una herramienta clave de la Psicología Social contemporánea. Surge como alternativa a las teorías de las actitudes, buscando superar la dicotomía entre individuo y sociedad. Las RS son conocimientos prácticos, construidos y compartidos socialmente, que permiten comprender y actuar en la vida cotidiana.\nLa teoría, iniciada por Serge Moscovici, propone que las RS no son simples opiniones o creencias, sino formas de pensamiento que hacen inteligible la realidad. Están ancladas en contextos históricos, culturales y sociales, y cumplen funciones fundamentales: orientan las prácticas sociales, estructuran identidades, y median entre lo nuevo y lo familiar.\nSe definen por su carácter colectivo, simbólico y dinámico. A diferencia de las actitudes (más individuales), las RS construyen los objetos de conocimiento y se generan en procesos sociales. Son de algo y de alguien, es decir, están siempre vinculadas a un sujeto social que representa, y a un objeto socialmente significativo.",
    image: rs,
    genially: "https://view.genially.com/6867e30ab83e93339ac3fc3c/presentation-di-iorio-2014-aproximaciones-al-concepto-de-representacion-social"
  },
  {
    id: 7,
    title: "Sobre la Teoría del Vínculo en Enrique Pichon Rivìere.",
    author: "Hernando Alberto Bernal Zuluaga",
    bibliography: "https://www.elcentroargentino.com.ar/centroar/Bernall%20Hernando%20-%20Apunte%20Sobre%20Teoria%20Del%20Vinculo%20De%20P%20Riviere.pdf",
    summary: "El presente documento recoge una sistematización de la Teoría del Vínculo desarrollada por Enrique Pichon-Rivière, a partir del trabajo de Hernando Alberto Bernal Z.. Esta teoría constituye uno de los pilares fundamentales de la psicología social latinoamericana, y plantea al vínculo como la unidad mínima de análisis, superando la visión individualista del sujeto.\nEl texto articula conceptos del psicoanálisis, la teoría de las relaciones de objeto, el conductismo, la fenomenología y la Gestalt, dentro del marco del Esquema Conceptual Referencial Operativo (ECRO). Se abordan las características del vínculo, su dimensión estructural, su relación con la conducta y su potencial de transformación a través de la espiral dialéctica.\nAsimismo, se expone una clasificación de los vínculos patológicos, la importancia de los mecanismos de introyección, proyección y el rol del grupo operativo como herramienta de intervención psicosocial.\nEste enfoque permite comprender al sujeto en interacción constante con su entorno, promoviendo procesos de cambio individual y colectivo mediante la comunicación, el aprendizaje y la elaboración consciente del vínculo.",
    image: bound,
    genially: "https://view.genially.com/6866b716d829f9f3197ba2fc/presentation-bernal-z-sobre-la-teoria-del-vinculo-en-enrique-pichon-riviere"
  }
]

export default texts