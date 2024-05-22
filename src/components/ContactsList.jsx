import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../features/contacts/contactSlice'

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Contact List</h2>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{contact.name}</p>
              <p className="text-sm text-gray-500">{contact.email}</p>
              <p className="text-sm text-gray-500">{contact.phone}</p>
            </div>
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactsList
