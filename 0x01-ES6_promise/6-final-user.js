import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const promises = [user, photo];
  return Promise.allSettled(promises).then((results) => {
    for (const data of results) {
      result.push({ status: data.status, value: data.status === 'fulfilled' ? data.value : `Error: ${data.reason.message}` });
    }
    return result;
  });
}
