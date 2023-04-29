import { NotificationManager } from "../utils/notificationManager";

const handleError = (error, details) => {
  if (details) console.log(details, error); // do not remove this log
  if (error?.message) {
    NotificationManager.error(error.message);
  } else if (typeof error === "string" && error !== "") {
    NotificationManager.error(error);
  } else {
    NotificationManager.error(details || "Something went wrong");
    console.log(error); // do not remove this log
  }
};

export default handleError;
