function showAlert(id) {
    const navigation = document.getElementById(`${id}`);

    navigation.insertAdjacentHTML('beforebegin',
        '<div style="margin-top: 12px; color: red"><b>Пожалуйста, выберите один из вариантов ответа.</b></div>');
}

export default showAlert;
