import { uploadPhoto, createUser } from '../utils';

export default async function asyncUploadUser() {
  return Promise.allSettled([uploadPhoto(), createUser()]).then((results) => {
    const returnObject = {};
    for (const result of results) {
      if (result.status === 'rejected') {
        return ({ photo: null, user: null });
      }
    }
    returnObject.photo = results[0].value;
    returnObject.user = results[1].value;
    return returnObject;
  });
}
