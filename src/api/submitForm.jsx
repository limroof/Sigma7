require("dotenv").config();

export const SubmitForm = (formData, setIsMessageSent, setError) => {
  const url =
    process.env.REACT_APP_REACT_ENV === "development"
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
    .then((data) => {
      data.ok ? setIsMessageSent(true) : setIsMessageSent(false);
      if (data.ok) {
        setIsMessageSent(true);
        setError(false);
      } else {
        setIsMessageSent(false);
        setError(true);
      }
    })
    .catch((e) => {
      setIsMessageSent(false);
      setError(true);
    });
};