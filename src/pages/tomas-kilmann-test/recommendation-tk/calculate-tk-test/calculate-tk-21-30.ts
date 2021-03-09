function calculateTkFromTwentyOneToThirty() {
  let confrontation: number = 0;
  let collaboration: number = 0;
  let compromise: number = 0;
  let digression: number = 0;
  let adaptation: number = 0;

  const oldConfrontation: string | null = localStorage.getItem('confrontation');
  const oldCollaboration: string | null = localStorage.getItem('collaboration');
  const oldCompromise: string | null = localStorage.getItem('compromise');
  const oldDigression: string | null = localStorage.getItem('digression');
  const oldAdaptation: string | null = localStorage.getItem('adaptation');

  function checkAnswerById(id: string) {
    return (<HTMLInputElement>document.getElementById(`${id}`)).checked;
  }

  if (checkAnswerById('a21')) collaboration += 1;
  if (checkAnswerById('b21')) adaptation += 1;

  if (checkAnswerById('a22')) compromise += 1;
  if (checkAnswerById('b22')) confrontation += 1;

  if (checkAnswerById('a23')) collaboration += 1;
  if (checkAnswerById('b23')) digression += 1;

  if (checkAnswerById('a24')) adaptation += 1;
  if (checkAnswerById('b24')) compromise += 1;

  if (checkAnswerById('a25')) confrontation += 1;
  if (checkAnswerById('b25')) adaptation += 1;

  if (checkAnswerById('a26')) compromise += 1;
  if (checkAnswerById('b26')) collaboration += 1;

  if (checkAnswerById('a27')) digression += 1;
  if (checkAnswerById('b27')) adaptation += 1;

  if (checkAnswerById('a28')) confrontation += 1;
  if (checkAnswerById('b28')) collaboration += 1;

  if (checkAnswerById('a29')) compromise += 1;
  if (checkAnswerById('b29')) digression += 1;

  if (checkAnswerById('a30')) adaptation += 1;
  if (checkAnswerById('b30')) collaboration += 1;

  localStorage.setItem(
    'confrontation',
    (Number(oldConfrontation) + confrontation).toString()
  );
  localStorage.setItem(
    'collaboration',
    (Number(oldCollaboration) + collaboration).toString()
  );
  localStorage.setItem(
    'compromise',
    (Number(oldCompromise) + compromise).toString()
  );
  localStorage.setItem(
    'digression',
    (Number(oldDigression) + digression).toString()
  );
  localStorage.setItem(
    'adaptation',
    (Number(oldAdaptation) + adaptation).toString()
  );
}

export default calculateTkFromTwentyOneToThirty;
