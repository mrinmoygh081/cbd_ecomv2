import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = process.env.REACT_APP_BACKEND_API;

export const postAPI = (path, payload, token) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${apiUrl + path}`,
    headers: {
      token: `${token}`,
    },
    // // Conditionally set the Content-Type based on the payload
    ...(payload instanceof FormData
      ? { "Content-Type": "multipart/form-data" }
      : { "Content-Type": "application/json" }),
    data: payload,
  };

  return axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      toast.error("Something went wrong! Please contact to the administrator");
      console.log(error);
      if (error?.response?.data?.msg === "Invalid Token") {
        return "logout";
      }
    });
};

export const getAPI = (path, token) => {
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${apiUrl + path}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };

  return axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      toast.error(
        "Something went wrong! Please contact to the administrator",
        error.response.data.errors
      );
    });
};

export const fileUploadAPI = (path, fileData, token) => {
  let data = new FormData();
  data.append("file", fileData);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${apiUrl + path}`,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `${token}`,
    },
    data: data,
  };

  return axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      toast.error("Something went wrong! Please contact to the administrator");
      console.log(error);
    });
};

export const putAPI = (path, body, token) => {
  let config = {
    method: "PUT",
    maxBodyLength: Infinity,
    url: `${apiUrl + path}`,
    headers: {
      "Content-Type": "application/json",
      token: `${token}`,
    },
    data: JSON.stringify(body),
  };

  return axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      toast.error("Something went wrong! Please contact to the administrator");
      console.log(error);
    });
};

export const deleteAPI = (path, token) => {
  let config = {
    method: "DELETE",
    maxBodyLength: Infinity,
    url: `${apiUrl + path}`,
    headers: {
      "Content-Type": "application/json",
      token: `${token}`,
    },
  };

  return axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      toast.error("Something went wrong! Please contact to the administrator");
      console.log(error);
    });
};
