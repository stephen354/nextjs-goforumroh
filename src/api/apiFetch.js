const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const apiFetch = async ({ endpoint, method = 'GET', body = null }) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error: ${error}`);
  }

  return response.json();
};
