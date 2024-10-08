export default function getListStudentIds(obj) {
    if (!Array.isArray(students)) {
        return [];
      }
  return obj.map((student) => student.id);
}
