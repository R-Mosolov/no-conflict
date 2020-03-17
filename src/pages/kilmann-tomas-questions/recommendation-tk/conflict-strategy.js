const Chart = require('chart.js');

function renderConflictStrategy() {
    const ctx = document.getElementById('conflict-strategy').getContext('2d');

    const data = {
        datasets: [{
            data: [0, 8, 7, 9, 6],
            backgroundColor: [
                'red',
                'lightblue',
                'lightgreen',
                'orange',
                'yellow'
            ]
        }],

        labels: [
            'Конфронтация (давление)',
            'Сотрудничество (разрешение проблемы)',
            'Компромисс (делим пополам)',
            'Уклонение (уход)',
            'Приспособление (сглаживание)'
        ]
    };

    return new Chart(ctx, {
        data: data,
        type: 'polarArea'
    });
}

export default renderConflictStrategy;
