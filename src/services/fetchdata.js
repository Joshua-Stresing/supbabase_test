import { client, checkError } from './client';

// export default async function getConsoles() {
//   const resp = await client.from('consoles').select('*');
//   return checkError(resp); 
// }

export async function fetchConsoles(){
  const params = new URLSearchParams();
  params.set('select', '*');
  let url = '${process.env.REACT_APP_SUPABASE_URL}/rest/v1/dogs';
  const resp = await fetch(url, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: 'Bearer ${process.env.REACT_APP_SUPABASE_KEY}',
    }
  });
  const data = await resp.json();
  return data;
}