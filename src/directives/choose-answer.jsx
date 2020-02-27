function chooseAnswer() {
    const navigation = document.getElementById('navigation');

    return navigation.insertAdjacentHTML('beforebegin',
        '<div style="margin-top: 12px"><b>Пожалуйста, выберите один из вариантов ответа.</b></div>');
}

export default chooseAnswer;
