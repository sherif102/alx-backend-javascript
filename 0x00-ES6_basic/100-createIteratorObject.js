export default function createIteratorObject(report) {
  const values = Object.values(report.allEmployees);
  const list = [];
  for (const value of values) {
    list.push(...value);
  }
  return list;
}
