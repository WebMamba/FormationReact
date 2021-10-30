export function login(email, password) {
  return fetch("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (!response.ok) {
      throw Error(JSON.parse(response.body));
    }

    return response.json();
  });
}
