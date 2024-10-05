// utils/usernameGenerator.js
const generateUniqueIdentifier = () => Math.random().toString(36).substring(2, 6);

const generateUsername = async (User, fullname) => {
  const baseUsername = fullname.toLowerCase().replace(/ /g, '_');
  let username = `${baseUsername}_${generateUniqueIdentifier()}`;
  let usernameExists = await User.findOne({ username });

  while (usernameExists) {
    username = `${baseUsername}_${generateUniqueIdentifier()}`;
    usernameExists = await User.findOne({ username });
  }

  return username;
};

export default generateUsername;