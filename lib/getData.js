export async function getData(endpoint) {
  const res = await fetch(
    `http://https://olympic-website-2kgay7a3p-modisek.vercel.app/:3000/api/${endpoint}`
  );
  const data = await res.json();

  return data;
}
