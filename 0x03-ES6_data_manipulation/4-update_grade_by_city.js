export default function updateStudentGradeByCity(list, city, newGrades) {
  const students = list.filter((student) => student.location === city);
  const gradedStudents = students.map((studentObject) => {
    const student = studentObject;
    for (const ngrade of newGrades) {
      if (ngrade.studentId === student.id) {
        student.grade = ngrade.grade;
        return student;
      }
    }
    student.grade = 'N/A';
    return student;
  });
  return gradedStudents;
}
