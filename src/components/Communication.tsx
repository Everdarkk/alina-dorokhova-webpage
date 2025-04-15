import Comm from '/public/svg/communication.svg'
import Mistake from '/public/svg/mistake.svg'

export default function Communication() {
    return (
        <section>
            <div className="wrapper">
                <div  className="communication">
                    <div className='text'>
                        <h2>Покроковий процес комунікації</h2>
                        <ol>
                            <li>Заявка – заповнення короткої форми або запис через месенджер.</li>
                            <li>Діагностика – перша зустріч для оцінки мовлення, організаційні питання.</li>
                            <li>План корекції – підбір первинної індивідуальної програми із періодичним її переглядом.</li>
                            <li>Початок занять – робота за складеним планом та надання рекомендацій для роботи вдома.</li>
                        </ol>
                    </div>

                    <Comm width={500} heigth={500}/>
                </div>

                <div className='mistakes'>
                    <Mistake width={500} heigth={500}/>

                    <div className='text'>
                        <h2>Часті помилки батьків перед початком та під час занять</h2>

                        <ul>
                            <li>Очікування швидкого результату після 1-2 занять.</li>

                            <li>Відсутність домашніх тренувань між сесіями.</li>

                            <li>Використання &quot;своїх&quot; методів, які можуть зашкодити прогресу.</li>

                            <li>Недостатня взаємодія з дитиною поза заняттями.</li>

                            <li>Відсутність прозорої комунікації з фахівцем.</li>
                        </ul>

                    </div>
                </div>       
            </div>
        </section>
    )
}