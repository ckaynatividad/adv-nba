export async function getCards() {
  const resp = await fetch(
    'https://protected-taiga-89091.herokuapp.com/api/card'
  );
  const data = await resp.json();
  console.log(data.data);
  return data.data;
}

export async function getCardbyId(_id) {
  const resp = await fetch(
    `https://protected-taiga-89091.herokuapp.com/api/card/${_id}`
  );
  const data = await resp.json();
  return data;
}
