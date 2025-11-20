import markerIcon from "../images/marker.png"

export default function JournalEntry() {
    return (
        <section className="journal-entry">

            <div className="journal-entry-image">
                <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" width={300} />
            </div>

            <div className="journal-entry-details">
                <div className="journal-entry-location">
                    <img src={markerIcon} className="journal-entry-icon" /> JAPAN
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="journal-entry-map-link">View on Google Maps</a>
                </div>

                <div className="journal-entry-date">12 Jan, 2024 - 24 Jan, 2024</div>

                <h2>Mount Fuji</h2>
                <p>Mount Fuji is the highest mountain in Japan, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707–1708. Mount Fuji is a popular destination for tourists and climbers, known for its symmetrical cone shape and cultural significance.</p>
            </div>
        </section>
    )
}