export function getTasks() {
  return fetch("/tasks").then((res) => res.json());
}

export function deleteTask(id) {
  return fetch(`/task/${id}`, { method: "DELETE" }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  });
}

export function putTask(id, data) {
  return fetch(`/task/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  });
}

export function postTask(data) {
  return fetch(`/tasks`, { method: "POST", body: JSON.stringify(data) }).then(
    (response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    }
  );
}
