export async function getData(endpoint) {
  const res = await fetch(
    `http://${process.env.VERCEL_URL}:3000/api/${endpoint}`
  );
  const data = await res.json();

  return data;
}
