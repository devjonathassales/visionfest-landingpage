function buildUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `/api${normalizedPath}`;
}

async function parseResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

function buildError(message, data, status) {
  const error = new Error(message || "Erro na requisição.");
  error.response = {
    data,
    status,
  };
  return error;
}

async function request(path, options = {}) {
  const response = await fetch(buildUrl(path), {
    method: options.method || "GET",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {}),
    },
    body: options.body,
    cache: "no-store",
  });

  const data = await parseResponse(response);

  if (!response.ok) {
    throw buildError(
      data?.mensagem || data?.message || "Erro na requisição.",
      data,
      response.status,
    );
  }

  return { data };
}

const api = {
  get(path) {
    return request(path, { method: "GET" });
  },

  post(path, body, options = {}) {
    return request(path, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    });
  },
};

export default api;
