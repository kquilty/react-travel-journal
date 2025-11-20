import globeIcon from "../images/globe.png"

export default function Header() {
    return (
        <header className="header">
            <img src={globeIcon} className="header-icon" />
            <h1 className="header-title">my travel journal.</h1>
        </header>
    )
}  