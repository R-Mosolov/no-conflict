function showAlert() {
    const navigation = document.getElementsByClassName('navigation');

    return navigation.insertAdjacentHTML('beforebegin',
        '<div style="margin-top: 12px; color: red"><b>Пожалуйста, выберите один из вариантов ответа.</b></div>');
}

export default showAlert;
