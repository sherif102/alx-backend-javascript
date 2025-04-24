import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const promises = [user, photo];
  // for (const promise of promises) {
  //   if (promise.then()) {
  //     result.push({ status: promise, value: promise.then((resolve) => resolve) });
  //   } else {
  //     result.push({ status: promise, value: promise.catch((err) => err) });
  //   }
  // }
  return Promise.allSettled(promises).then((results) => results);
}
