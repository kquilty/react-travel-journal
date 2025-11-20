import markerIcon from "../images/marker.png"

export default function JournalEntry() {
    return (
        <section className="journal-entry">

            <div className="journal-entry-location">
                <img src={markerIcon} className="journal-entry-icon" /> JAPAN
                <span className="journal-entry-map-link">View on Google Maps</span>
            </div>

            <div className="journal-entry-date">12 Jan, 2024 - 24 Jan, 2024</div>

            <h2>Mount Fuji</h2>
            <p>Mount Fuji is the highest mountain in Japan, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707–1708. Mount Fuji is a popular destination for tourists and climbers, known for its symmetrical cone shape and cultural significance.</p>
        </section>
    )
}