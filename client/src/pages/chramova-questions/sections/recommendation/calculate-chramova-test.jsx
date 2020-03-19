import showAlert from "../../../../directives/show-alert";

function calculateChramovaTest(event) {
    const emotionalConflict = document.getElementById('emotional-conflict').checked;
    const socialConflict = document.getElementById('social-conflict').checked;
    const rationalConflict = document.getElementById('rational-conflict').checked;

    const workConflict = document.getElementById('work-conflict').checked;
    const familyConflict = document.getElementById('family-conflict').checked;
    const friendConflict = document.getElementById('friend-conflict').checked;

    let recommendationText = '';

    event.preventDefault();

    if (emotionalConflict && workConflict) {
        recommendationText = 'Для улаживания этого конфликта вам необходимо укротить свои эмоции и вспомнить об иерархии ' +
            'отношений на рабочем месте.';
    } else if (emotionalConflict && familyConflict) {
        recommendationText = 'Выключите свои негативные эмоции в отношении оппонента и вспомните о ваших с ним ' +
            'совместных целях.';
    } else if (emotionalConflict && friendConflict) {
        recommendationText = 'Эмоционально «вскипая» в общественном пространстве попробуй напомнить себе, что в ' +
            'этом обществе тебе еще долго жить. А насколько счастлива будет эта жизнь – решать только тебе. Ты ' +
            'способен коммуницировать в этом обществе. Коммуницируй.';
    }

    else if (socialConflict && workConflict) {
        recommendationText = 'Вы следите за своими эмоциями на работе. Осознаете диспозицию в организации. ' +
            'Подключите к решению конфликта вашего оппонента путем налаживания коммуникации с ним.';
    } else if (socialConflict && familyConflict) {
        recommendationText = 'В осознаваемых вами совместных целях с партнером самым лучшим помощником вам ' +
            'станет его осознание этих целей. Обсуждайте с ним ваши совместные цели.';
    } else if (socialConflict && friendConflict) {
        recommendationText = 'Если ты осознаешь диспозицию конфликта, свои интересы и интересы других, то укротив' +
            ' свои эмоции, направив их в конструктивное русло, сможешь «разрулить» этот конфликт без труда.';
    }

    else if (rationalConflict && workConflict) {
        recommendationText = 'Не контролируя свои эмоции, помните что вам важнее: истина или здоровые ' +
            'взаимоотношения в коллективе на будущее? Обговорите ваши недопонимания с оппонентом.';
    } else if (rationalConflict && familyConflict) {
        recommendationText = 'Выключив негативные эмоции в отношении партнера и прислушавшись к нему, вы ' +
            'сможете обсудить с ним ваше совместное будущее. Основной принцип: «Ты хочешь быть прав или ' +
            'счастлив в браке?»';
    } else if (rationalConflict && friendConflict) {
        recommendationText = 'Контролируя негативные эмоции и осознавая всю значимость для тебя того ' +
            'общественного пространства, в котором ты живешь, ты вполне способен разрешить сложившийся ' +
            'конфликт. Помни: в обществе каждый может быть счастлив, если осознает в чем заключается счастье других.';
    }

    else {
        return showAlert('navigation-conflict-reason-and-place');
    }

    window.location.pathname = '/sections/recommendation';
    return localStorage.setItem('recommendation-text', recommendationText);
}

export default calculateChramovaTest;
