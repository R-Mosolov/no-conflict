function calculateTkTest() {
  let confrontation: number = 0;
  let collaboration: number = 0;
  let compromise: number = 0;
  let digression: number = 0;
  let adaptation: number = 0;

  function checkAnswerById(id: string) {
    return (<HTMLInputElement> document.getElementById(`${id}`)).checked;
  }

  if (checkAnswerById("a1")) digression += 1;
  if (checkAnswerById("b1")) adaptation += 1;

  if (checkAnswerById("a2")) compromise += 1;
  if (checkAnswerById("b2")) collaboration += 1;

  if (checkAnswerById("a3")) confrontation += 1;
  if (checkAnswerById("b3")) adaptation += 1;

  if (checkAnswerById("a4")) compromise += 1;
  if (checkAnswerById("b4")) adaptation += 1;

  if (checkAnswerById("a5")) confrontation += 1;
  if (checkAnswerById("b5")) digression += 1;

  if (checkAnswerById("a6")) digression += 1;
  if (checkAnswerById("b6")) confrontation += 1;

  if (checkAnswerById("a7")) digression += 1;
  if (checkAnswerById("b7")) compromise += 1;

  if (checkAnswerById("a8")) confrontation += 1;
  if (checkAnswerById("b8")) collaboration += 1;

  if (checkAnswerById("a9")) digression += 1;
  if (checkAnswerById("b9")) confrontation += 1;

  if (checkAnswerById("a10")) confrontation += 1;
  if (checkAnswerById("b10")) compromise += 1;

  localStorage.setItem("confrontation", confrontation.toString());
  localStorage.setItem("collaboration", collaboration.toString());
  localStorage.setItem("compromise", compromise.toString());
  localStorage.setItem("digression", digression.toString());
  localStorage.setItem("adaptation", adaptation.toString());
}

export default calculateTkTest;
