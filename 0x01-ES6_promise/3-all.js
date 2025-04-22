import { uploadPhoto, createUser } from "../utils.js";

export default function handleProfileSignup() {
  const all = Promise.all([uploadPhoto(), createUser()]);
  all.then((response) => console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`));
  all.catch((err) => console.error('Signup system offline', err));
}
