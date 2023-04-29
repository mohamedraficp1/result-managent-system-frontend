export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      sessionStorage.getItem("acesoftcc_dealer_user") != null
        ? JSON.parse(sessionStorage.getItem("acesoftcc_dealer_user"))
        : null;
  } catch (error) {
    console.log(
      ">>>>: src/helpers/sessionStorageUtil.js  : getCurrentUser -> error",
      error
    );
    user = null;
  }
  return user;
};

export const setCurrentUser = (user) => {
  try {
    if (user) {
      sessionStorage.setItem("acesoftcc_dealer_user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("acesoftcc_dealer_user");
    }
  } catch (error) {
    console.log(
      ">>>>: src/helpers/sessionStorageUtil.js : setCurrentUser -> error",
      error
    );
  }
};

export const removeCurrentUser = () => {
  if (sessionStorage.getItem("acesoftcc_dealer_user") !== null) {
    sessionStorage.removeItem("acesoftcc_dealer_user");
  }
};
