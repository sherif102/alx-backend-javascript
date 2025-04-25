import { uploadPhoto, createUser } from '../utils';

export default async function asyncUploadUser() {
  const isNull = await Promise.allSettled([uploadPhoto(), createUser()]).then((results) => {
    let isTrue = false;
    for (const result of results) {
      if (result.status === 'rejected') {
        isTrue = true;
      }
    }
    return isTrue;
  });
  if (isNull) {
    return ({ photo: null, user: null });
  }
  const result = {
    photo: await uploadPhoto(),
    user: await createUser(),
  };
  return result;
}
