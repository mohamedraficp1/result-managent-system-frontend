import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_SERVICE } from "../../../api";
import { handleError, safeFunctionAsync } from "../../../helpers";
import { setCurrentUser } from "../../../helpers/sessionStorageUtil";
import { Loader, NotificationManager } from "../../../utils";

function useLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  /**
   * This function will invoke the sign in API and verifies that the user is a valid user. Error should be handled within this function
   * @param {object} inputData
   * @returns {Promise} userData
   */
  const SignInUser = (inputData) => {
    return new Promise((resolve, _reject) => {
      const requestBody = {
        email: inputData.email,
        password: inputData.password,
      };
      API_SERVICE.signIn(requestBody)
        .then((res) => resolve(res))
        .catch((err) => {
          Loader.hide();
          if (err.message === "No login match found")
            return handleError("Invalid Username or Password");
          handleError(err, "Login Error");
        });
    });
  };

  const onSubmit = (inputData) =>
    safeFunctionAsync(async () => {
      Loader.show();
      // const userInfo = await SignInUser(inputData);

      // if (userInfo) {
      //   Loader.hide();
      //   setCurrentUser(userInfo);
      //   NotificationManager.success("Login successfull");
      //   navigate("/");
      // }
    });

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
  };
}

export default useLogin;
