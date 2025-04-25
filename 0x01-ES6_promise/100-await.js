import { uploadPhoto, createUser } from '../utils';

export default async function asyncUploadUser() {
  return Promise.allSettled([uploadPhoto(), createUser()]).then((results) => {
    for (const result of results) {
      if (result.status === 'rejected') {
        return ({ photo: null, user: null });
      }
    }
    return ({ photo: results[0].value, user: results[1].value });
  });
}
