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
                        {...entry}
                    />
                )
            })}

        </>
    )
}

export default App
