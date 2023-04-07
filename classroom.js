"use strict"

class Classroom {

    constructor(students = []) {
        this.students = students
    };

    addStudent(student) {
        if(!this.students.includes(student)) {
            this.students.push(student);
        };
    };

    removeStudent(student) {
        if(this.students.includes(student)) {
            this.students.splice(student, 1);
        };
    };

    shuffleStudents() {
        let students = this.students;
        let j;
        let temp;
        for (let i = students.length-1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = students[i];
            students[i] = students[j];
            students[j] = temp;
        };
        this.students = students;
    };

};