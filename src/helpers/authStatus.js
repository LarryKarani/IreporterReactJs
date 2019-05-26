import authUser from './authUser';

const authStatus = () => {
  const user = authUser();
  if (user && user.access_token) {
    return true;
  }
  return false;
};

export default authStatus;