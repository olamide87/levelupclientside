import React, { useContext, useState, useEffect } from "react"


export const EventForm = props => {
    const [currentEvent, setEvent] = useState({})

    useEffect(() => {
        // Get all existing games from API
    }, [])

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={currentEvent.gameId}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option></option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            {/* Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // Create the event
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}
