export async function getData(endpoint) {
  const res = await fetch(`https://${context.req.rawHeaders[1]}/${endpoint}`);
  const data = await res.json();

  return data;
}
