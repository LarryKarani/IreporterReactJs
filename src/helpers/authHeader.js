import authUser from './authUser';

const authHeader = () => {
  const user = authUser();
  if (user && user.access_token) {
    return { Authorization: `Bearer ${user.access_token}` };
  }
  return {};
};

export default authHeader;