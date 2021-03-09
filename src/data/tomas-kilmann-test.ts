interface TomasKilmannTestConfig {
  [index: number]: {
    question: {
      name: string;
      text: string;
    };
    answers: {
      [index: number]: {
        name: string;
        text: string;
        conflictStrategy: string;
      };
    };
  };
}

const tomasKilmannTest: TomasKilmannTestConfig = [
  {
    question: {
      name: 'q1',
      text: 'Утверждение 1',
    },
    answers: [
      {
        name: 'q1-a1',
        text:
          'Иногда я предоставляю право решать проблему другим. Иногда я предоставляю право решать проблему другим.',
        conflictStrategy: 'digression',
      },
      {
        name: 'q1-a2',
        text:
          'Я стараюсь подчеркнуть общее в наших позициях, а не обсуждать спорные моменты.',
        conflictStrategy: 'adaptation',
      },
    ],
  },
  {
    question: {
      name: 'q2',
      text: 'Утверждение 2',
    },
    answers: [
      {
        name: 'q2-a1',
        text: 'Я пытаюсь найти компромиссное решение.',
        conflictStrategy: 'compromise',
      },
      {
        name: 'q2-a2',
        text: 'Я пытаюсь учесть все интересы: свои и оппонента.',
        conflictStrategy: 'collaboration',
      },
    ],
  },
  {
    question: {
      name: 'q3',
      text: 'Утверждение 3',
    },
    answers: [
      {
        name: 'q3-a1',
        text: 'Обычно я твердо стою на своем.',
        conflictStrategy: 'confrontation',
      },
      {
        name: 'q3-a2',
        text:
          'Иногда я могу утешать других и пытаться сохранить с ними отношения.',
        conflictStrategy: 'adaptation',
      },
    ],
  },
  {
    question: {
      name: 'q4',
      text: 'Утверждение 4',
    },
    answers: [
      {
        name: 'q4-a1',
        text: 'Я пытаюсь найти компромиссное решение.',
        conflictStrategy: 'compromise',
      },
      {
        name: 'q4-a2',
        text:
          'Иногда я жертвую собственными интересами ради интересов др. стороны.',
        conflictStrategy: 'adaptation',
      },
    ],
  },
  {
    question: {
      name: 'q5',
      text: 'Утверждение 5',
    },
    answers: [
      {
        name: 'q5-a1',
        text: 'При выработке решения ищу помощи со стороны других.',
        conflictStrategy: 'confrontation',
      },
      {
        name: 'q5-a2',
        text:
          'Я пытаюсь сделать все возможное, чтобы избежать обострения в отношениях.',
        conflictStrategy: 'digression',
      },
    ],
  },
  {
    question: {
      name: 'q6',
      text: 'Утверждение 6',
    },
    answers: [
      {
        name: 'q6-a1',
        text: 'Я пытаюсь не создавать себе репутацию неприятного человека.',
        conflictStrategy: 'digression',
      },
      {
        name: 'q6-a2',
        text: 'Я пытаюсь навязать другим свою позицию.',
        conflictStrategy: 'confrontation',
      },
    ],
  },
  {
    question: {
      name: 'q7',
      text: 'Утверждение 7',
    },
    answers: [
      {
        name: 'q7-a1',
        text:
          'Я пытаюсь отложить решение вопроса, чтобы иметь время тщательно его обдумать.',
        conflictStrategy: 'digression',
      },
      {
        name: 'q7-a2',
        text: 'Я жертвую одними выгодами, чтобы получить взамен другие.',
        conflictStrategy: 'compromise',
      },
    ],
  },
  {
    question: {
      name: 'q8',
      text: 'Утверждение 8',
    },
    answers: [
      {
        name: 'q8-a1',
        text: 'Обычно я твердо настаиваю на своем.',
        conflictStrategy: 'confrontation',
      },
      {
        name: 'q8-a2',
        text:
          'Я пытаюсь сразу же открыто обсудить все интересы и спорные вопросы.',
        conflictStrategy: 'collaboration',
      },
    ],
  },
  {
    question: {
      name: 'q9',
      text: 'Утверждение 9',
    },
    answers: [
      {
        name: 'q9-a1',
        text:
          'Я чувствую, что различия в позициях не всегда стоят того, чтобы о них беспокоиться.',
        conflictStrategy: 'digression',
      },
      {
        name: 'q9-a2',
        text: 'Я прилагаю некоторые усилия, чтобы повернуть дело на свой лад.',
        conflictStrategy: 'confrontation',
      },
    ],
  },
  {
    question: {
      name: 'q10',
      text: 'Утверждение 10',
    },
    answers: [
      {
        name: 'q10-a1',
        text: 'Я твердо настаиваю на своем.',
        conflictStrategy: 'confrontation',
      },
      {
        name: 'q10-a2',
        text: 'Я пытаюсь найти компромиссное решение.',
        conflictStrategy: 'compromise',
      },
    ],
  },

  {
    question: {
      name: 'q11',
      text: 'Утверждение 11',
    },
    answers: [
      {
        name: 'q11-a1',
        text:
          'Я пытаюсь сразу же открыто обсудить все интересы и спорные вопросы.',
        conflictStrategy: 'collaboration',
      },
      {
        name: 'q11-a2',
        text:
          'Иногда я могу утешать других и пытаться сохранить с ними отношения.',
        conflictStrategy: 'adaptation',
      },
    ],
  },
  {
    question: {
      name: 'q12',
      text: 'Утверждение 12',
    },
    answers: [
      {
        name: 'q12-a1',
        text: 'Иногда я избегаю занимать позицию, ведущую к конфронтации.',
        conflictStrategy: 'digression',
      },
      {
        name: 'q12-a2',
        text: 'Я готов кое в чем уступить оппоненту, если он тоже мне уступит.',
        conflictStrategy: 'compromise',
      },
    ],
  },
  {
    question: {
      name: 'q13',
      text: 'Утверждение 13',
    },
    answers: [
      {
        name: 'q13-a1',
        text: 'Я предлагаю вариант «ни вам, ни нам».',
        conflictStrategy: 'compromise',
      },
      {
        name: 'q13-a2',
        text: 'Я настаиваю на принятии моих условий.',
        conflictStrategy: 'confrontation',
      },
    ],
  },
  {
    question: {
      name: 'q14',
      text: 'Утверждение 14',
    },
    answers: [
      {
        name: 'q14-a1',
        text: 'Я излагаю оппоненту мои соображения и интересуюсь его идеями.',
        conflictStrategy: 'collaboration',
      },
      {
        name: 'q14-a2',
        text:
          'Я демонстрирую оппоненту логичность и выгоду принятия моих условий.',
        conflictStrategy: 'confrontation',
      },
    ],
  },
  {
    question: {
      name: 'q15',
      text: 'Утверждение 15',
    },
    answers: [
      {
        name: 'q15-a1',
        text:
          'Иногда я могу утешать других и пытаться сохранить с ними отношения.',
        conflictStrategy: 'adaptation',
      },
      {
        name: 'q15-a2',
        text:
          'Я пытаюсь сделать все возможное, чтобы избежать обострения в отношениях.',
        conflictStrategy: 'digression',
      },
    ],
  },
  {
    question: {
      name: 'q16',
      text: 'Утверждение 16',
    },
    answers: [
      {
        name: 'q16-a1',
        text: 'Я стараюсь щадить чувства других.',
        conflictStrategy: 'adaptation',
      },
      {
        name: 'q16-a2',
        text: 'Я пытаюсь убедить оппонента в выгодности принятия моих условий.',
        conflictStrategy: 'confrontation',
      },
    ],
  },
  {
    question: {
      name: 'q17',
      text: 'Утверждение 17',
    },
    answers: [
      {
        name: 'q17-a1',
        text: 'Обычно я твердо настаиваю на своем.',
        conflictStrategy: 'confrontation',
      },
      {
        name: 'q17-a2',
        text:
          'Я пытаюсь сделать все возможное, чтобы избежать обострения в отношениях.',
        conflictStrategy: 'digression',
      },
    ],
  },
  {
    question: {
      name: 'q18',
      text: 'Утверждение 18',
    },
    answers: [
      {
        name: 'q18-a1',
        text:
          'Я позволяю оппоненту придерживаться своего мнения, если ему от этого лучше.',
        conflictStrategy: 'adaptation',
      },
      {
        name: 'q18-a2',
        text:
          'Я согласен кое в чем уступить оппоненту, если он тоже кое в чем мне уступит.',
        conflictStrategy: 'compromise',
      },
    ],
  },
  {
    question: {
      name: 'q19',
      text: 'Утверждение 19',
    },
    answers: [
      {
        name: 'q19-a1',
        text:
          'Я пытаюсь сразу же, открыто, обсудить все интересы и спорные вопросы.',
        conflictStrategy: 'collaboration',
      },
      {
        name: 'q19-a2',
        text:
          'Я пытаюсь отложить принятие решения, чтобы иметь время тщательно его обдумать.',
        conflictStrategy: 'digression',
      },
    ],
  },
  {
    question: {
      name: 'q20',
      text: 'Утверждение 20',
    },
    answers: [
      {
        name: 'q20-a1',
        text: 'Я пытаюсь сразу же обсудить противоречия.',
        conflictStrategy: 'collaboration',
      },
      {
        name: 'q20-a2',
        text:
          'Я пытаюсь найти справедливое сочетание из выгод и уступок для каждого из нас.',
        conflictStrategy: 'compromise',
      },
    ],
  },

  {
    question: {
      name: 'q21',
      text: 'Утверждение 21',
    },
    answers: [
      {
        name: 'q21-a1',
        text:
          'При подготовке к переговорам я стараюсь учитывать интересы оппонента.',
        conflictStrategy: 'collaboration',
      },
      {
        name: 'q21-a2',
        text:
          'Я больше склонен к непосредственному и открытому обсуждению проблемы.',
        conflictStrategy: 'adaptation',
      },
    ],
  },
  {
    question: {
      name: 'q22',
      text: 'Утверждение 22',
    },
    answers: [
      {
        name: 'q22-a1',
        text:
          'Я стараюсь найти позицию, находящуюся между позицией оппонента и моей.',
        conflictStrategy: 'compromise',
      },
      {
        name: 'q22-a2',
        text: 'Я настаиваю на своих интересах.',
        conflictStrategy: 'confrontation',
      },
    ],
  },
  {
    question: {
      name: 'q23',
      text: 'Утверждение 23',
    },
    answers: [
      {
        name: 'q23-a1',
        text:
          'Очень часто я стараюсь удовлетворить все интересы, свои и оппонента.',
        conflictStrategy: 'collaboration',
      },
      {
        name: 'q23-a2',
        text: 'Иногда я предоставляю право решать проблему другим.',
        conflictStrategy: 'digression',
      },
    ],
  },
  {
    question: {
      name: 'q24',
      text: 'Утверждение 24',
    },
    answers: [
      {
        name: 'q24-a1',
        text:
          'Я стараюсь пойти навстречу оппоненту, если его условия ему слишком важны.',
        conflictStrategy: 'adaptation',
      },
      {
        name: 'q24-a2',
        text: 'Я пытаюсь склонить оппонента к компромиссу.',
        conflictStrategy: 'compromise',
      },
    ],
  },
  {
    question: {
      name: 'q25',
      text: 'Утверждение 25',
    },
    answers: [
      {
        name: 'q25-a1',
        text:
          'Я демонстрирую оппоненту логичность и выгоду принятия моих условий.',
        conflictStrategy: 'confrontation',
      },
      {
        name: 'q25-a2',
        text:
          'При подготовке к переговорам я пытаюсь учитывать интересы оппонента.',
        conflictStrategy: 'adaptation',
      },
    ],
  },
  {
    question: {
      name: 'q26',
      text: 'Утверждение 26',
    },
    answers: [
      {
        name: 'q26-a1',
        text: 'Я предлагаю вариант «ни вам, ни нам».',
        conflictStrategy: 'compromise',
      },
      {
        name: 'q26-a2',
        text:
          'Я почти всегда пытаюсь удовлетворить все пожелания, как свои, так и оппонента.',
        conflictStrategy: 'collaboration',
      },
    ],
  },
  {
    question: {
      name: 'q27',
      text: 'Утверждение 27',
    },
    answers: [
      {
        name: 'q27-a1',
        text: 'Иногда я избегаю занимать позицию, ведущую к конфронтации.',
        conflictStrategy: 'digression',
      },
      {
        name: 'q27-a2',
        text:
          'Я позволяю оппоненту придерживаться своего мнения, если ему от этого лучше.',
        conflictStrategy: 'adaptation',
      },
    ],
  },
  {
    question: {
      name: 'q28',
      text: 'Утверждение 28',
    },
    answers: [
      {
        name: 'q28-a1',
        text: 'Обычно я твердо стою на своем.',
        conflictStrategy: 'confrontation',
      },
      {
        name: 'q28-a2',
        text: 'При выработке решения я постоянно ищу помощи со стороны других.',
        conflictStrategy: 'collaboration',
      },
    ],
  },
  {
    question: {
      name: 'q29',
      text: 'Утверждение 29',
    },
    answers: [
      {
        name: 'q29-a1',
        text: 'Я предлагаю вариант «ни вам, ни нам».',
        conflictStrategy: 'compromise',
      },
      {
        name: 'q29-a2',
        text:
          'Я чувствую, что различия в позициях не всегда стоят того, чтобы о них беспокоиться.',
        conflictStrategy: 'digression',
      },
    ],
  },
  {
    question: {
      name: 'q30',
      text: 'Утверждение 30',
    },
    answers: [
      {
        name: 'q30-a1',
        text: 'Я стараюсь щадить чувства других.',
        conflictStrategy: 'adaptation',
      },
      {
        name: 'q30-a2',
        text:
          'Я всегда стараюсь найти решение проблемы совместно с оппонентом.',
        conflictStrategy: 'collaboration',
      },
    ],
  },
];

export default tomasKilmannTest;
// Uncomit this before test run
// module.exports = tomasKilmannTest;
