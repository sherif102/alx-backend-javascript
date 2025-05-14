export const weakMap = new WeakMap();
const tracker = {};
weakMap.set(tracker, 0);

export function queryAPI(endpoint) {
  if (weakMap.get(tracker) >= 4) throw new Error('Endpoint load is high');
  const currentValue = weakMap.get(tracker);
  weakMap.set(tracker, currentValue + 1);
  weakMap.set(endpoint, currentValue + 1);
}
