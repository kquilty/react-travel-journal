// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import JournalEntry from './components/JournalEntry'
import entryData from './entryData'

function App() {

    return (
        <>
            <Header />

            {entryData.map(entry => {
                return (
                    <JournalEntry 
                        key={entry.id}
                        image={{
                            src: entry.img.src,
                            alt: entry.img.alt
                        }}
                        country={entry.country}
                        dateRange={entry.dates}
                        googleMapsUrl={entry.googleMapsLink}
                        title={entry.title}
                        description={entry.text}
                    />
                )
            })}

        </>
    )
}

export default App
