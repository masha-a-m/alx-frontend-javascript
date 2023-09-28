const class2020 = new HolbertonClass(2020, 'San Francisco');
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', new HolbertonClass(2019, 'San Francisco'));
const student4 = new StudentHolberton('Donald', 'Bush', new HolbertonClass(2019, 'San Francisco'));
const student5 = new StudentHolberton('Jason', 'Sandler', new HolbertonClass(2019, 'San Francisco'));

const listOfStudents = [student1, student2, student3, student4, student5];
console.log(listOfStudents);
console.log(listOfStudents.map(student => student.fullStudentDescription));
export {listOfStudents};
