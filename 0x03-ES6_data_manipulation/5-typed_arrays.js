export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer);
  if (position < length) {
    array[position] = value;
  } else {
    throw new Error('Position outside range');
  }
  return new DataView(array.buffer);
}
