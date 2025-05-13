export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    const filtered = Array.from(set).filter((value) => value.startsWith(startString));
    const mapped = filtered.map((value) => value.slice(startString.length));
    const final = mapped.join('-');
    if (final.endsWith('-')) return final.slice(0, -1);
    return final;
  }
  return '';
}
