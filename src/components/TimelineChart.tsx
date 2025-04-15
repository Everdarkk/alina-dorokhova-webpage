import Timeline from '/public/svg/Timeline.svg'
import Year from './Year'

export default function TimelineChart() {
    return (
        <div>
            <Timeline />

            <div className='years'>
                <Year
                    year='2016'
                    text='початок логопедичної діяльності в ході навчання в ДДПУ'
                />

                <Year
                    year='2018'
                    text='закінчила магістратуру ДДПУ з відзнакою'
                />

                <Year
                    year='2019'
                    text='логопединя в компанії "Логозон"'
                />

                <Year
                    year='2021'
                    text='науково-методичний співробітник-консультант в компанії “Логозон”'
                />

                <Year
                    year='2022'
                    text='онлайн-логопед для дітей-білінгвів в онлайн-школі “GovoriKa”'
                />

                <Year
                    year='2023-∞'
                    text='приватна практика онлайн-логопеда'
                />
            </div>
        </div>
    )
}