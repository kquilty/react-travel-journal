import markerIcon from "../images/marker.png"

export default function JournalEntry(props) {
    return (
        <section className="journal-entry">

            <div className="journal-entry-image-wrapper">
                <img src={props.img.src} alt={props.img.alt} />
            </div>

            <div className="journal-entry-details">
                <div className="journal-entry-location">
                    <img src={markerIcon} className="journal-entry-icon" /> {props.country}
                    <a href={props.googleMapsLink} className="journal-entry-map-link">View on Google Maps</a>
                </div>

                <div className="journal-entry-date">{props.dates}</div>

                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </section>
    )
}