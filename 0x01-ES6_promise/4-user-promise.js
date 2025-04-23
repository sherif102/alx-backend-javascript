export default function signUpUser(firstName, lastName) {
  const promiseName = new Promise((resolve) => {
    resolve({ firstName: `${firstName}`, lastName: `${lastName}` });
  });
  return promiseName;
}
