export function postJSON(url, data, token) {
  return new Promise((resolve, reject) => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      if (token instanceof Object) {
        headers = { ...headers, ...token };
      } else {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    fetch(url, {
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

  if (token) headers["Authorization"] = `Bearer ${token}`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers,
      method: "POST",
      body: objectToFormData(data),
    })
      .then(parseJson)
      .then((res) => (res.ok ? resolve(res.json) : reject(res.json)))
      .catch((e) => reject(e));
  });
}

export function putJSON(url, data, token) {
  return new Promise((resolve, reject) => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      if (token instanceof Object) {
        headers = { ...headers, ...token };
      } else {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    fetch(url, {
      headers,
      method: `PUT`,
      body: JSON.stringify(data),
    })
      .then(parseJson)
      .then((res) => (res.ok ? resolve(res.json) : reject(res.json)))
      .catch((e) => reject(e));
  });
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
