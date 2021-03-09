const Chart = require('chart.js');

function renderConflictStrategy() {
  const ctx = (<HTMLCanvasElement>(
    document.getElementById('conflict-strategy')
  ))?.getContext('2d');

  const data = {
    datasets: [
      {
        data: [
          localStorage.getItem('confrontation'),
          localStorage.getItem('collaboration'),
          localStorage.getItem('compromise'),
          localStorage.getItem('digression'),
          localStorage.getItem('adaptation'),
        ],
        backgroundColor: ['red', 'lightblue', 'lightgreen', 'orange', 'yellow'],
      },
    ],

    labels: [
      'Конфронтация (давление)',
      'Сотрудничество (разрешение проблемы)',
      'Компромисс (делим пополам)',
      'Уклонение (уход)',
      'Приспособление (сглаживание)',
    ],
  };

  return new Chart(ctx, {
    data: data,
    type: 'polarArea',
  });
}

export default renderConflictStrategy;
