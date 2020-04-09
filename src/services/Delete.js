import { domainPath } from "./config";

const DeleteAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}/${data}`, {
      method: "DELETE",
    }).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default DeleteAPI;
