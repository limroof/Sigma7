require("dotenv").config();

export const SubmitForm = (formData) => {
  const url =
    process.env.REACT_APP_REACT_ENV == "development"
      ? process.env.REACT_APP_LOCAL_API_URL
      : process.env.REACT_APP_CLOUD_API_URL;
  const header = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch(url + "/send", header)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => {
      console.log(e);
    });
};
