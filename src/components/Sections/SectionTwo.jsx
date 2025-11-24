import styles from "./styles/SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <section className={styles.questionSectionTwo}>
      <h2
        className={`${styles.questionSectionTitle} ${styles.questionSectionTitleTwo}`}
      >
        Что снижает концентрацию внимания?
      </h2>

      <div className={styles.questionSectionAnswerTwoContainer}>
        <article className={styles.questionSectionAnswerTwo}>
          <h3
            className={`${styles.questionSectionAnswerTitle} ${styles.questionSectionAnswerTitleTwo} ${styles.titleDecor}`}
          >
            Многозадачность
          </h3>
          <p className={styles.questionSectionAnswerText}>
            Как концентрация может снижаться из-за… концентрации? Любая
            стрессовая ситуация (и резко меняющийся мир в целом) заставляет наш
            мозг постоянно «сканировать» окружающую среду на предмет опасности.
            Например, читать новости вместо работы. Но быть собранными всё время
            — невозможно. Концентрация — мышца, и она может не выдержать, если
            не давать ей отдохнуть.
          </p>
        </article>

        <div className={styles.questionSectionAnswerTwo}>
          <h3
            className={`${styles.questionSectionAnswerTitle} ${styles.questionSectionAnswerTitleTwo} ${styles.titleDecor}`}
          >
            Еда
          </h3>
          <p className={styles.questionSectionAnswerText}>
            «Быстрые углеводы» — сахар, белый хлеб, сладости — молниеносно
            доставляют в мозг энергию и помогают ему лучше работать. Но уходит
            эта энергия также быстро, как и приходит. А мы в результате попадаем
            на «углеводные качели»: как только действие «быстрых углеводов»
            заканчивается, мы чувствуем усталость и сонливость. И хотим ещё
            больше быстрых углеводов.
          </p>
        </div>

        <div className={styles.questionSectionAnswerTwo}>
          <h3
            className={`${styles.questionSectionAnswerTitle} ${styles.questionSectionAnswerTitleTwo} ${styles.titleDecor}`}
          >
            Гаджеты
          </h3>
          <p className={styles.questionSectionAnswerText}>
            Да-да, это та самая ситуация, когда на экране ноутбука — код, в
            наушниках — подкаст, а на компьютере фоном — ещё и видео с забавными
            утятами. В результате мозг пытается переключиться с одной задачи на
            другую — и просто не может. А чтобы вернуться к состоянию полной
            концентрации, человеку в среднем нужно 20 минут. Вот и получается,
            что чем больше времени мы проводим в гаджетах, тем больше времени
            затем нужно, чтобы вернуться к работе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
