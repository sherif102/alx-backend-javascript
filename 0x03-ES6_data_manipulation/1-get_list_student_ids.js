export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map((item) => item.id);
  }
  return [];
}
