function calculateTkFromElevenToTwenty() {
  let confrontation: number = 0;
  let collaboration: number = 0;
  let compromise: number = 0;
  let digression: number = 0;
  let adaptation: number = 0;

  const oldConfrontation: string | null = localStorage.getItem("confrontation");
  const oldCollaboration: string | null = localStorage.getItem("collaboration");
  const oldCompromise: string | null = localStorage.getItem("compromise");
  const oldDigression: string | null = localStorage.getItem("digression");
  const oldAdaptation: string | null = localStorage.getItem("adaptation");

  function checkAnswerById(id: string) {
    return (<HTMLInputElement> document.getElementById(`${id}`)).checked;
  }

  if (checkAnswerById("a11")) collaboration += 1;
  if (checkAnswerById("b11")) adaptation += 1;

  if (checkAnswerById("a12")) digression += 1;
  if (checkAnswerById("b12")) compromise += 1;

  if (checkAnswerById("a13")) compromise += 1;
  if (checkAnswerById("b13")) confrontation += 1;

  if (checkAnswerById("a14")) collaboration += 1;
  if (checkAnswerById("b14")) confrontation += 1;

  if (checkAnswerById("a15")) adaptation += 1;
  if (checkAnswerById("b15")) digression += 1;

  if (checkAnswerById("a16")) adaptation += 1;
  if (checkAnswerById("b16")) confrontation += 1;

  if (checkAnswerById("a17")) confrontation += 1;
  if (checkAnswerById("b17")) digression += 1;

  if (checkAnswerById("a18")) adaptation += 1;
  if (checkAnswerById("b18")) compromise += 1;

  if (checkAnswerById("a19")) collaboration += 1;
  if (checkAnswerById("b19")) digression += 1;

  if (checkAnswerById("a20")) collaboration += 1;
  if (checkAnswerById("b20")) compromise += 1;

  localStorage.setItem("confrontation", (Number(oldConfrontation) + confrontation).toString());
  localStorage.setItem("collaboration", (Number(oldCollaboration) + collaboration).toString());
  localStorage.setItem("compromise", (Number(oldCompromise) + compromise).toString());
  localStorage.setItem("digression", (Number(oldDigression) + digression).toString());
  localStorage.setItem("adaptation", (Number(oldAdaptation) + adaptation).toString());
}

export default calculateTkFromElevenToTwenty;
