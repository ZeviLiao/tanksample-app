export async function serverFetch<T>(url: string): Promise<T> {
  console.log(`[serverFetch] Fetching from: ${url}`);
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const responseData = await response.json();
  return responseData;
}
