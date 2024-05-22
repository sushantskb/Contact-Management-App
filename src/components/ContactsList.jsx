import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../features/contacts/contactSlice'

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <div className="space-y-4">
      {contacts.map(contact => (
        <div key={contact.id} className="flex justify-between items-center p-4 border border-gray-300 rounded-md">
          <div>
            <h3 className="text-lg font-medium">{contact.name}</h3>
            <p className="text-sm text-gray-500">{contact.email}</p>
            <p className="text-sm text-gray-500">{contact.phone}</p>
          </div>
          <button
            onClick={() => handleDelete(contact.id)}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default ContactsList
