import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Management</h1>
      <ContactForm />
      <ContactsList />
    </div>
  );
};

export default App;
