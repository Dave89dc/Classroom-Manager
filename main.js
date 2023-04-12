"use strict"

// Bonus:
// 1) Rimozione dello studente
// 2) Sito esteticamente gradevole
// 3) Disposizione degli studenti non in lista ma affiancati a 2 a 2 (i tavoli)
// 4) Aggiunta della data di nascita dello studente
// 5) Se è il compleanno dello studente, il suo nome sarà scritto in modo evidenziato


const student1 = new Student('Simone', 'Maccarone', '20/05/2003');
const student3 = new Student('Luis Alberto', 'Castro', '28/07/1993');
const student2 = new Student('Dave', 'Consigliere', '29/09/1989');
const student4 = new Student('Francesco', 'Badile', '5/09/1993');
const student10 = new Student('Pietro', 'Viglino', '29/12/1988');
const student7 = new Student('Valentina', 'Cherubini', '1/06/2001');
const student9 = new Student('Vlad', "P'yatnytskyy", '2/10/1997');
const student5 = new Student('Daniele', 'Puggioni', '17/08/1999');
const student6 = new Student('Jing', 'Wang', '16/06/1993');
const student8 = new Student('Davide', 'Cresta', '30/05/2002');

const classroom1 = new Classroom([student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]);

function displayClassroom(classroom) {
    document.getElementById('student-list').innerHTML = '';
    const students = classroom.students;
    for (let i = 0; i < students.length; i++) {
        const studentList = document.getElementById('student-list');
        const list = document.createElement('li');
        const textList = document.createTextNode(`${(students[i]).nameOf()}`);
        const removeButton = document.createElement('button');
        const textButton = document.createTextNode('|');
        const brick1 = document.createElement('div');
        const brick2 = document.createElement('div');
        const brick3 = document.createElement('div');
        removeButton.appendChild(textButton);
        removeButton.addEventListener('click', (event) => removeStudentFromList(students[i]));
        list.appendChild(textList);
        list.appendChild(removeButton);
        list.appendChild(brick1);
        list.appendChild(brick2);
        list.appendChild(brick3);
        studentList.appendChild(list);
    };
};


// function displayClassroom(classroom) {
//     const studentList = document.getElementById('student-list');
//     studentList.innerHTML = '';
//     const students = classroom.students;
//     for (let i = 0; i < students.length; i++) {
//         const element = students[i];
//         studentList.innerHTML += `<li>${element.nameOf()} <button onclick='removeStudentFromList()'>|</button></li>`;
//     };
// };


function removeStudentFromList(stud) {
    const studentsOfClassroom = classroom1.students;
    const studentsIndex = studentsOfClassroom.indexOf(stud);
    studentsOfClassroom.splice(studentsIndex, 1);
    displayClassroom(classroom1);
};

function addStudentToClassroom() {
    const studentsOfClassroom = classroom1.students;
    const inputName = document.getElementById('name');
    const inputSurname = document.getElementById('surname');
    const inputBirth = document.getElementById('birth');
    const newName = inputName.value;
    const newSurname = inputSurname.value;
    const newDob = inputBirth.value;
    if(newName !== '' && newSurname !== '' && newDob !== '') {
        let newStudent = new Student(newName, newSurname, newDob);
        for (let i = 0; i < studentsOfClassroom.length; i++) {
            if(studentsOfClassroom[i].name === newStudent.name && studentsOfClassroom[i].surname === newStudent.surname) {
                newStudent = '';
            };
        };
        if(newStudent !== '') {
            studentsOfClassroom.push(newStudent);
            displayClassroom(classroom1);
        };
    };
    inputName.value = '';
    inputSurname.value = '';
    inputBirth.value = '';
};

function shuffleTheClassroom() {
    let students = classroom1.students;
    let j;
    let temp;
    for (let i = students.length-1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = students[i];
        students[i] = students[j];
        students[j] = temp;
    };
    displayClassroom(classroom1);
};

displayClassroom(classroom1);




// Esercizi Codwars

// const number = 123456789;

// function descendingOrder(n){
//     let string = n.toString();
//     let tempArray = string.split('');
//     let decendingArray = tempArray.sort(function (number1, number2) {
//         if(number1 > number2) {
//             return -1;
//         } else if(number1 < number2) {
//             return 1;
//         } else {
//             return 0;
//         }
//     } );
//     let newNumber = decendingArray.join('');
//     let number2 = parseInt(newNumber);
//     return number2
// };

// console.log(descendingOrder(number));


// let arrayOfNumbers = [5, 3, 2, 1, 4];

// function removeSmallest(numbers) {
//     let array = [];
//     let tempNum = -Infinity;
//     if(numbers.length > 1) {
//         for (let i = 0; i < numbers.length; i++) {
//             if(tempNum > numbers[i]) {
//                 if(!array.includes(tempNum)) {
//                     array.push(tempNum);
//                 }
//             } else {
//                 if(!array.includes(numbers[i])) {
//                     array.push(numbers[i]);
//                 }
//             }
//             tempNum = numbers[i];
//         };
//         return array;
//     };
//     return array;
// }

// console.log(removeSmallest(arrayOfNumbers))