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

    shuffleStudent() {
        
    };

};