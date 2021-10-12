function createUser(first, last) {
    const user = {
        firstName: first,
        lastName: last
    }
    return user
}
// console.log(createUser("Aaron", "Russell"))

const user1 = {
    firstName: "Tim",
    lastName: "Horton"
}
function setAge(user, age) {
    user.age = age
    return user
}
// console.log(setAge(user, 35))

const user2 = { 
    firstName: 'Angela',
    lastName: 'Merkel',
    age: 66
}
function incrementAge(user) {
    user.age += 1
    return user
}
// console.log(incrementAge(user2))

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: true
}
function fixCar(car) {
    car.needsMaitenance = false
    return car
}
// console.log(fixCar(car))

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
}
const newGrades = [88, 70, 90]
function addGrades(student, newGrades){
    student.grades.push(...newGrades)
    return student
}
// console.log(addGrades(student, newGrades))

const car2 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: false
}
function getDataType(obj, key) {
    return typeof obj[key]
}
// console.log(getDataType(car2, "make"))
// console.log(getDataType(car2, "model"))
// console.log(getDataType(car2, "year"))
// console.log(getDataType(car2, "needsMaitenance"))

const todos = [
    { 
        title: 'Get gas', 
        isComplete: false
    },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
]
const newTodo = {
    title: 'Call mom', 
    isComplete: false
}
function addTodo(todos, newTodo) {
    todos.push(newTodo)
    return todos
}
// console.log(addTodo(todos, newTodo))

const playlist = {

    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]

}
const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
}
function addSong(playlist, song) {
    playlist.duration = 10
    playlist.songs.push(newSong)
    return playlist
}
// console.log(addSong(playlist, newSong))

const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
}
function updateReportCard(reportCard, grade) {
    reportCard.grades.push(grade)
    let max = reportCard.grades[0]
    let min = reportCard.grades[0]
    let sum = 0
    for(let i = 0; i < reportCard.grades.length; i++) {
        if(reportCard.grades[i] > max) {
            max = reportCard.grades[i]
            reportCard.highestGrade = max
        }
        if(reportCard.grades[i] < min) {
            min = reportCard.grades[i]
            reportCard.lowestGrade = min
        }
        sum += reportCard.grades[i]
        reportCard.averageGrade = sum / reportCard.grades.length
    }
    return reportCard
}
// console.log(updateReportCard(reportCard, 100))








// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
