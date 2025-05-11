export default function getListStudentIds(list) {
  const returnList = [];
  for (const item of list) {
    if (item.id) returnList.push(item.id);
  }
  return returnList;
}
