import { domainPath } from "./config";

const getAPI = (path) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}`)
      .then((response) => response.json())
      .then(
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

export default getAPI;
