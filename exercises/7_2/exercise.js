const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// exercício 01
const addKey = (obj, key, value) => obj[key] = value;

addKey(lesson2, "turno", "manha");
//console.log(lesson2);

// exercício 02
const listKeys = (obj) => {
  let arrayKeys = Object.keys(obj);
  return arrayKeys;
}
//console.log(listKeys(lesson2));

//exercício 03
const sizeObj = obj => Object.keys(obj).length;
//console.log(sizeObj(lesson2));

//exercício 04
const listValues = obj => Object.values(obj);
//console.log(listValues(lesson2));

//exercício 05
let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//console.log(allLessons);

//exercício 06
const numberStudents = obj => {
  let result = 0;
  const array = Object.keys(obj);
  for (i in array){
    result += obj[array[i]].numeroEstudantes;
  }
  return result;
}
//console.log(numberStudents(allLessons));

//exercicio 07
const getValueByNumber = (obj, number) => {
  const array = Object.keys(obj);
  return obj[array[number]];
}
//console.log(getValueByNumber(lesson1, 2));

//exercício 08
const verifyPair = (obj, key, value) => {
  //result = false;
  const array = Object.entries(obj);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][0] === key) {
      if (array[i][1] === value){
        return true;
      }
    }
  }
  return false;
}
//console.log(verifyPair(lesson1, 'turno', 'manhã'));

//exercício bônus 01
const mathStudents = obj => {
  let result = 0;
  const array = Object.keys(obj);
  for (i in array){
    if (obj[array[i]].materia === 'Matemática'){
      result += obj[array[i]].numeroEstudantes;
    }
  }
  return result;
}
//console.log(mathStudents(allLessons));

//exercício bônus 02
const createReport = (obj, teacher) => {
  let students = 0;
  const lessons = []
  const array = Object.values(obj);
  for (i in array) {
    if (array[i].professor === teacher){
      lessons.push(array[i].materia);
      students += array[i].numeroEstudantes;
    }
  }
  const result = {
    professor : teacher,
    aulas: lessons,
    estudantes: students,
  }
  return result;
}
//console.log(createReport(allLessons, 'Maria Clara'));
console.log(lesson1.length);