const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            const newPersonsArr = state.persons.concat(newPerson)
            return {
                persons: [...newPersonsArr]
            }
        case 'DELETE_PERSON':
            const updatedPersonsArr = state.persons.filter(person => person.id !== action.personId)
            return {
                persons: [...updatedPersonsArr]
            }
    }
    return state
}

export default reducer