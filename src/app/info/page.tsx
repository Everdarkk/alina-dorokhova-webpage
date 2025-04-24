import HeroInfo from "@/components/HeroInfo"
import ForBeg from "@/components/ForBeg"
import Communication from "@/components/Communication"
import MyTools from "@/components/MyTools"
import Schedule from "@/components/Schedule"

export default function Info() {
    return (
        <section>
            <div style={{maxWidth: '90rem', marginInline: 'auto'}}>
                <HeroInfo />
                <Schedule />
            </div>

            <ForBeg />
            <Communication />

            <div style={{maxWidth: '90rem', marginInline: 'auto'}}>
                <MyTools />
            </div>
        </section>
    )
}