export default function updateUniqueItems(map) {
  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      try {
        map.set(key, 100);
      } catch (err) {
        throw new Error('Cannot process');
      }
    }
  }
}
