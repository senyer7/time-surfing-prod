import styles from "./styles/SectionThree.module.css";

const SectionThree = () => {
  return (
    <section className={styles.questionSectionThree}>
      <h2 className={styles.questionSectionTitle}>
        Как концентрироваться лучше, чем золотая рыбка (то есть дольше трёх
        секунд)
      </h2>

      <article className={styles.questionSectionAnswerThree}>
        <h3
          className={`${styles.questionSectionAnswerTitle} ${styles.titleDecor}`}
        >
          5 простых (на самом деле не очень) советов
        </h3>

        <div className={styles.questionSectionAnswerThreeContainer}>
          <h4
            className={`${styles.questionSectionAnswerSubtitle} ${styles.titleDecor}`}
          >
            Представьте небо и облака
          </h4>
          <p
            className={`${styles.questionSectionAnswerText} ${styles.questionSectionAnswerTextThree}`}
          >
            Или листья в ручье. Тут дело в лёгкой медитации, которая помогает
            успокоиться. Ведь часто именно тревожные мысли о сложных задачах как
            раз и мешают эти сложные задачи делать. В такие моменты можно
            закрыть глаза и представить, что чистое небо — это вы, а облака —
            тревожные мысли. И сколько бы их ни было — ясное небо всегда будет
            где-то там, за тучами, и никуда не денется. Это упражнение поможет
            вернуться в настоящий момент, а не волноваться о потенциальных
            проблемах из будущего.
          </p>
        </div>

        <div className={styles.questionSectionAnswerThreeContainer}>
          <h4
            className={`${styles.questionSectionAnswerSubtitle} ${styles.titleDecor}`}
          >
            Включите музыку
          </h4>
          <p
            className={`${styles.questionSectionAnswerText} ${styles.questionSectionAnswerTextThree}`}
          >
            Но не любую, и не любимую. Любимая может быть связана с сильными
            положительными эмоциями, которые тоже очень сильно отвлекают.
            Подойдёт тихая, спокойная, умеренно-ритмичная. Можно вообще
            попробовать включить плейлист в «белым шумом» или нейромузыкой.
          </p>
        </div>

        <div className={styles.questionSectionAnswerThreeContainer}>
          <h4
            className={`${styles.questionSectionAnswerSubtitle} ${styles.titleDecor}`}
          >
            Прогуляйтесь
          </h4>
          <p
            className={`${styles.questionSectionAnswerText} ${styles.questionSectionAnswerTextThree}`}
          >
            Или даже пробегитесь. Лучше найти парк или лес: один эксперимент{" "}
            <a
              className={styles.questionSectionAnswerLink}
              href="https://www.sciencedirect.com/science/article/abs/pii/S0272494415000328"
              target="_blank"
              rel="noopener noreferrer"
            >
              показал
            </a>
            , что созерцание природы повышает концентрацию, в то время как после
            просмотра городских пейзажей она наоборот понижается. Можно
            совместить прогулку с физическими упражнениями или бегом — так в
            мозг поступит ещё больше кислорода и он будет лучше работать. Но и
            простая двадцатиминутная прогулка — тоже отличный вариант.
          </p>
        </div>

        <div className={styles.questionSectionAnswerThreeContainer}>
          <h4
            className={`${styles.questionSectionAnswerSubtitle} ${styles.titleDecor}`}
          >
            Хорошо ешьте
          </h4>
          <p
            className={`${styles.questionSectionAnswerText} ${styles.questionSectionAnswerTextThree}`}
          >
            Мы — не ваша бабушка, но это правда важно. Выбирайте продукты,
            которые препятствуют резким скачкам сахара в крови. Например, с
            высоким содержанием клетчатки: овощи, ягоды, бобовые (нут, чечевица,
            фасоль), коричневый рис, хлеб из цельнозерновой пшеницы.
          </p>
        </div>

        <div className={styles.questionSectionAnswerThreeContainer}>
          <h4
            className={`${styles.questionSectionAnswerSubtitle} ${styles.titleDecor}`}
          >
            Читайте
          </h4>
          <p
            className={`${styles.questionSectionAnswerText} ${styles.questionSectionAnswerTextThree}`}
          >
            Настоящие бумажные книги. Это правда помогает с концентрацией: чтобы
            прочитать пост в соцсети, достаточно нескольких минут или даже
            секунд. А вот интересная книга способна затянуть и на несколько
            часов и круто тренирует направленное внимание.
          </p>
        </div>
      </article>
    </section>
  );
};

export default SectionThree;
