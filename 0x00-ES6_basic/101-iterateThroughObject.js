export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const name of reportWithIterator) {
    result += `${name} | `;
  }
  return result.slice(0, result.length - 3);
}
