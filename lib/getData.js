export async function getData(endpoint) {
  const res = await fetch(`${process.env.VERCEL_URL}/api/${endpoint}`);
  const data = await res.json();

  return data;
}
