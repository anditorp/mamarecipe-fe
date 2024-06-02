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
