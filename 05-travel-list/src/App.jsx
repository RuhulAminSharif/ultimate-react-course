import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(item) {
    setItems((items) => items.filter((i) => i.id !== item.id));
  }
  function handleToggleItems(item) {
    setItems((items) =>
      items.map((i) => (i.id === item.id ? { ...i, packed: !i.packed } : i))
    );
  }
  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (!confirmed) return;

    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
