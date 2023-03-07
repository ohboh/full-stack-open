import { useState } from 'react'

const Filter = ({ filterValue, handleFilter }) => {
  return (
    <div>
      <input value={filterValue} onChange={handleFilter} placeholder="Search" />
    </div>
  )
}

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addName }) => {
  return (
    <form onSubmit={addName}>
      <div>
        Name: <input value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNumberChange} required />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(person => <div key={person.id}>{person.name}: {person.number}</div>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0921", id: 1 }
  ])
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    if (!names.includes(newName)) {
      const person = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(person))

      if (newName.toLowerCase().includes(newFilter.toLowerCase())) {
        setFilteredPersons(filteredPersons.concat(person))
      }
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    const filterValue = event.target.value
    setNewFilter(filterValue)
    if (filterValue.trim() === '') {
      setFilteredPersons(persons)
    } else {
      setFilteredPersons(persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())))
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterValue={newFilter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addName={addName} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
