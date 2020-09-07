/**
 * Performs a GET request to the backend API.
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
function _fetcher(url, params) {
  const query = Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
  const suffix = query ? `?${query}` : "";

  return fetch(`http://localhost:8080/api${url}${suffix}`).then((r) =>
    r.json()
  );
}

/**
 *
 * @param params equivalent with the parameters of GET /materials call
 * @returns {Promise<*>}
 */
export function fetchMaterials(params) {
  return _fetcher("/products", params);
}

/**
 * Performs a GET request to fetch a single material object.
 *
 * @param id id of the material
 * @param params equivalent with the parameters of GET /materials/{id} call
 * @returns {Promise<*>}
 */
export function fetchMaterial(id, params) {
  return _fetcher(`/products/${id}`, params);
}
