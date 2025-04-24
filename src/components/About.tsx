import Intro from "./Intro"
import TimelineChart from "./TimelineChart"
import Approach from "./Approach"
import Faq from "./Faq"
import Reviews from "./Reviews"
import Final from "./Final"

export default function About(){
    return (
        <>
            <section 
            style={{
                maxWidth: '90rem', 
                marginInline: 'auto',
            }}>
            <Intro />
            <TimelineChart />
            <Approach />
            <Faq />
            <Reviews />
            
            </section>
            
            <Final />
        </>
        
    )
}