export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      throw new Error('The face API is not working currently');
    }
  });
  return promise;
}
