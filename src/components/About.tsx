import Intro from "./Intro"
import TimelineChart from "./TimelineChart"
import Approach from "./Approach"
import Faq from "./Faq"
import Reviews from "./Reviews"
import Final from "./Final"

export default function About(){
    return (
        <>
            <Intro />
            <TimelineChart />
            <Approach />
            <Faq />
            <Reviews />
            <Final />
        </>
    )
}