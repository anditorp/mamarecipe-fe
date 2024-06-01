import FormData from "form-data";
// import { cookies } from "next/headers";

const API_ENDPOINT = {
  development: "http://localhost:8001",
};

export const BASE_URL = "https://pijar-mama-recipe.vercel.app";
// export const BASE_URL = API_ENDPOINT.production

export function getMedia(path) {
  return path ? BASE_URL + `/media/${path}` : null;
}

function parseJson(response) {
  return new Promise((resolve, reject) => {
    return response
      .json()
      .then((json) => {
        resolve({
          status: response.status,
          ok: response.ok,
          json,
        });
      })
      .catch((e) => reject(e));
  });
}

function objectToFormData(data = {}) {
  let formData = new FormData();

  if (data) {
    for (let key in data) {
      if (data[key] !== null) {
        if (key === "files[]" && data[key] instanceof Array) {
          data[key].forEach((item) => {
            if (item.uri) {
              formData.append(key, {
                uri: item.uri,
                type: item.type,
                name: item.fileName,
              });
            } else {
              formData.append(key, item);
            }
          });
        } else if (data[key]?.uri) {
          formData.append(key, {
            uri: data[key].uri,
            type: data[key].type,
            name: data[key].fileName,
          });
        } else {
          const finalData = Array.isArray(data[key])
            ? JSON.stringify(data[key])
            : data[key];
          formData.append(key, finalData);
        }
      }
    }
  }

  return formData;
}

export function objectToParams(object = {}, prefix = "") {
  let objectToArray = [];

  for (const key in object) {
    if (object[key] !== null) {
      if (object[key] instanceof Array) {
        object[key] = JSON.stringify(object[key]);
      }
      objectToArray.push(`${key}=${object[key]}`);
    }
  }

  return objectToArray.length > 0 ? prefix + objectToArray.join("&") : "";
}

export function get(url, token) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) headers["Authorization"] = `Bearer ${token}`;

    fetch(BASE_URL + url, {
      headers,
      method: "GET",
    })
      .then(parseJson)
      .then((res) => (res.ok ? resolve(res.json) : reject(res.json)))
      .catch((e) => reject(e));
  });
}

export function postJSON(url, data, token) {
  return new Promise((resolve, reject) => {
    let headers = {
      "Content-Type": "application/json",
      credentials: "include",
      Cookie: `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZGl0b0BnbWFpbC5jb20iLCJuYW1lIjoiYW5kaXRvIiwiaWF0IjoxNzE3MjIzNzU3LCJleHAiOjE3MTcyNjY5NTcsImlzcyI6Im1hbWEtcmVjaXBlIn0.1eim-JSp5u_CvbpnWK5j3K9V9d3DGG0-_A7JDFC1lSg`,
    };

    if (token) {
      if (token instanceof Object) {
        headers = { ...headers, ...token };
      } else {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    fetch(BASE_URL + url, {
      headers,
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(parseJson)
      .then((res) => (res.ok ? resolve(res.json) : reject(res.json)))
      .catch((e) => reject(e));
  });
}

export function postFormData(url, data, token) {
  const headers = {};

  if (token) {
    // headers["Authorization"] = `Bearer ${token}`;
    headers[
      "Cookie"
    ] = `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZGl0b0BnbWFpbC5jb20iLCJuYW1lIjoiYW5kaXRvIiwiaWF0IjoxNzE3MjIyMDc4LCJleHAiOjE3MTcyNjUyNzgsImlzcyI6Im1hbWEtcmVjaXBlIn0._kZ_j1sgUc55ZrNqyuPX2e5xLzKMnYe9aVudLovyzZY`;
  }
  headers[
    "Cookie"
  ] = `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZGl0b0BnbWFpbC5jb20iLCJuYW1lIjoiYW5kaXRvIiwiaWF0IjoxNzE3MjIyMDc4LCJleHAiOjE3MTcyNjUyNzgsImlzcyI6Im1hbWEtcmVjaXBlIn0._kZ_j1sgUc55ZrNqyuPX2e5xLzKMnYe9aVudLovyzZY`;
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + url, {
      //   headers: {
      //     Cookie: `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZGl0b0BnbWFpbC5jb20iLCJuYW1lIjoiYW5kaXRvIiwiaWF0IjoxNzE3MjIyMDc4LCJleHAiOjE3MTcyNjUyNzgsImlzcyI6Im1hbWEtcmVjaXBlIn0._kZ_j1sgUc55ZrNqyuPX2e5xLzKMnYe9aVudLovyzZY`,
      //   },
      method: "POST",
      body: objectToFormData(data),
      cache: "no-cache",
      credentials: "same-origin",
    })
      .then(parseJson)
      .then((res) => (res.ok ? resolve(res.json) : reject(res.json)))
      .catch((e) => reject(e));
  });
}

export function uploadFile(url, data, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(
          xhr.responseText
            ? JSON.parse(xhr.responseText)
            : reject({ message: "Terjadi Kesalahan" })
        );
      } else {
        reject(
          xhr.responseText
            ? JSON.parse(xhr.responseText)
            : reject({ message: "Terjadi Kesalahan" })
        );
      }
    };

    xhr.onerror = () => {
      reject(
        xhr.responseText
          ? JSON.parse(xhr.responseText)
          : reject({ message: "Terjadi Kesalahan" })
      );
    };

    xhr.upload.onprogress = onProgress;

    xhr.open("POST", BASE_URL + url);

    const formData = objectToFormData(data);

    xhr.send(formData);
  });
}

export async function getPublicPageData() {
  let companyProfile = {};

  try {
    companyProfile = await get("/company-profile/public");
  } catch (e) {}

  return {
    companyProfile,
  };
}
