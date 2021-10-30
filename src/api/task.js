export function getTasks(token) {
  return fetch("/tasks", {
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  }).then((res) => res.json());
}

export function deleteTask(token, id) {
  return fetch(`/task/${id}`, {
    method: "DELETE",
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  });
}

export function putTask(token, id, data) {
  return fetch(`/task/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  });
}

export function postTask(token, data) {
  return fetch(`/tasks`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  });
}
