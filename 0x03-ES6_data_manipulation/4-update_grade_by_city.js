
export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      return {
        ...student,
        grade: newGrade.forEach(element => {
          if (student.id == element.studentId){
            student.gade = element.grade
            console.log(element)
          }
        })
      //   newGrade.find((newGradeStudent) => {
      //     // check if an object has a grade property, if not set it to 0
      //     return newGradeStudent.studentId == student.id
      // })
     
      }
    });
}