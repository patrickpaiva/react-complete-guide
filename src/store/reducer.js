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
            const newPersonsArr = [...state.persons]
            newPersonsArr.concat(newPerson)
            return {
                persons: [...newPersonsArr]
            }
        case 'DELETE_PERSON':
            const newPersonsArr = [...state.persons]
            const updatedPersonsArr = newPersonsArr.filter(person => person.id !== action.personId)
            return {
                persons: [...updatedPersonsArr]
            }
    }
}

export default reducer