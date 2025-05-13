export default function cleanSet(set, startString) {
  if (startString === '') return '';

  const filtered = Array.from(set).filter((value) => value.startsWith(startString));
  const mapped = filtered.map((value) => value.slice(startString.length));
  return mapped.join('-');
}
