import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../../components/title';
import renderConflictStrategy from './render-conflict-strategy';

function RecommendationForTomasKilmann() {
  return (
    <div className="mb-5">
      <Title titleText="Благодарим за ответы!" />

      <p className="mt-3">
        Исходя из Ваших ответов, наиболее типичные для Вас способы решения
        конфликтов:
      </p>
      <div
        className="pt-3 pb-3 bg-light border rounded"
        onClick={() => renderConflictStrategy()}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <p>Кликните здесь, чтобы загрузить результат...</p>
        </div>
        <canvas id="conflict-strategy" />
      </div>

      <h2 className="mt-3">Описание стратегий:</h2>
      <ol className="pl-3">
        <li>
          <p className="mt-3">
            <b>Уклонение</b> эффективно в ситуациях, когда партнер обладает
            объективно большей силой и использует ее в конфликтной борьбе. В
            общении со сложной конфликтной личностью используйте любую
            возможность, чтобы избежать конфликта: в этом нет ничего постыдного
            или унизительного. Избегание приносит положительные плоды, являясь
            временной отсрочкой в решении конфликта: пока на руках мало данных
            или нет психологической уверенности в своей позиции. Временно уйти
            от проблемы, чтобы в дальнейшем решить ее окончательно — это часто
            единственно верная стратегия.
          </p>
        </li>
        <li>
          <p className="mt-3">
            <b>Приспособление</b> естественно в ситуациях, когда затронутая
            проблема не так важна для человека, как для его оппонента, или
            отношения с оппонентом представляют собой самостоятельную ценность,
            значимее достижения цели. Это непредсказуемая по своим последствиям
            стратегия. Если отказ от цели не стоил человеку большого труда,
            уступчивость может положительно сказаться на его самооценке и
            отношениях с партнером. Очень важно чувствовать, что другой заметил
            и оценил жертву. В противном случае остается чувство досады, обиды
            и, следовательно, почва для эмоционального конфликта.
          </p>
        </li>
        <li>
          <p className="mt-3">
            <b>Конфронтация</b> — стратегия для серьезных ситуаций и жизненно
            важных проблем, зачастую она эффективна в экстремальных ситуациях.
            Противоборство оправданно, если цель чрезвычайно важна или, если
            человек обладает реальной силой и властью, уверен в своей
            компетентности. Если власти и силы недостаточно, можно увязнуть в
            конфликте, а то и вовсе проиграть. Кроме того, применение
            конфронтации для решения проблем в личных отношениях чревато
            отчуждением.
          </p>
        </li>
        <li>
          <p className="mt-3">
            <b>Сотрудничество</b> — это не столько стратегия поведения, сколько
            стратегия взаимодействия. Она незаменима в близких, продолжительных
            и ценных для обоих партнеров отношениях, при равенстве статусов и
            психологической власти. Она позволяет партнерам разрешить конфликт,
            не отказываясь от своих реальных целей. Всем хорошо сотрудничество,
            кроме одного. Это длинная история. Нужно время, чтобы
            проанализировать потребности, интересы и опасения обеих сторон, а
            затем тщательно обсудить их, найти наилучший вариант их совмещения,
            выработать план решения и пути его выполнения и т.д. Сотрудничество
            не терпит суеты и спешки, но позволяет решить конфликты полностью.
            Если времени нет, можно прибегнуть к компромиссу как к «заменителю»
            сотрудничества.
          </p>
        </li>
        <li>
          <p className="mt-3">
            <b>Компромисс,</b> или квазисотрудничество, или торг о взаимных
            уступках. Эффективен в ситуациях, требующих быстрого исхода. «Дележ»
            потребностей бывает необходим для сохранения отношений, особенно в
            тех случаях, когда возместить интересы сторон невозможно. Компромисс
            редко приносит истинное удовлетворение результатом конфликтного
            процесса. Любые варианты дележа — пополам, поровну, по-братски —
            психологически несправедливы. И это понятно: цель полностью не
            достигнута, некоторая часть брошена на алтарь позитивного исхода
            конфликта, но оценить жертву некому, так как оппонент так же
            пострадал, как и вы сами.
          </p>
        </li>
      </ol>
      <p className="p-5 bg-light border rounded">
        <i>
          Если Вам недостаточно этой информации и Вы бы хотели получить её по
          конкретной ситуации, с учётом Вашего контекста, то рекомендуем
          обратиться к эксперту в этой области, составившему первый тест,
          Евгении Храмовой.
        </i>
      </p>

      <Link to="/Tomas-Kilmann-test/section-3">
        <button className="mt-3 btn btn-secondary w-100">
          Вернуться назад
        </button>
      </Link>
      <br />
      <Link to="/Hramova-contacts">
        <button className="mt-2 btn btn-success w-100">
          Контакты эксперта
        </button>
      </Link>
    </div>
  );
}

export default RecommendationForTomasKilmann;
