export function loadRestData(url, mapper, limit) {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json.slice(0, limit))
    .then((data) => data.map(mapper));
}
