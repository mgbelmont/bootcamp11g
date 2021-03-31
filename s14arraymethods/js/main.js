let mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]
/*
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
 */

var arrayScores = [];
var arrayHtml = []
var arrayCss = []
var arrayJs = []
var arrayReact = [];

const findArraySignatures = (array) => {
    mentorsArray.forEach((mentor, index) => {
       
    arrayHtml[index] = mentor.scores[0]
    arrayCss[index] = mentor.scores[1]
    arrayJs[index] = mentor.scores[2]
    arrayReact[index] = mentor.scores[3]
     })
}

findArraySignatures(mentorsArray);
//console.log(arrayHtml)

const promedio = (accum, item) => {
    return accum + item.score
}
var averageHtml = arrayHtml.reduce(promedio, 0) / arrayHtml.length
var averageCss = arrayCss.reduce(promedio, 0) / arrayCss.length
var averageJs = arrayJs.reduce(promedio, 0) / arrayJs.length
var averageReact = arrayReact.reduce(promedio, 0) / arrayReact.length

console.log(`Promedio de HTML ${averageHtml}`);
console.log(`Promedio de CSS ${averageCss}`);
console.log(`Promedio de JS ${averageJs}`);
console.log(`Promedio de ReactJs ${averageReact}`);

//-Obtener el promedio individual de cada mentor
var arrayAverageByMentor = [];
const averageByMentor = () => {
    mentorsArray.forEach(item => {
        let promedio = item.scores.reduce((accum, item) => { return accum + item.score }, 0) / item.scores.length
        arrayAverageByMentor = item.scores.map((item) => {return `Mi nombre es ${item.name} y mi promedio es de ${promedio}` })
        console.log(`El promedio de ${item.name} es ${promedio}`)
    })
 }
averageByMentor();
console.log(arrayAverageByMentor);
/*Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
     */

//Obtener la lista de mentores cuyo promedio sea mayor a 9.5 */