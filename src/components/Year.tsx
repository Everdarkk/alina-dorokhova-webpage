export default function Year({year, text}: {year: string, text: string}) {
    return (
        <span>
            <p>{year}</p>
            <p>{text}</p>
        </span>
    )
}