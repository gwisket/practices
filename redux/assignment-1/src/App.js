import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [works, setWorks] = useState({});

  const handleList = (event) => {
    const eventIndex = event.target.parentElement.dataset.index;
    const action = event.target.dataset.action;
    let nextWorks = { ...works };

    switch (action) {
      case 'toggle':
        nextWorks[eventIndex].checked = !nextWorks[eventIndex].checked;
        break;

      case 'clear':
        delete nextWorks[eventIndex];
        break;

      default:
        break;
    }

    setWorks(nextWorks);
  }

  const addEvent = (event) => {
    event.preventDefault();

    setIndex(index + 1);

    setWorks({
      ...works,
      [index]: {
        checked: false,
        content: event.target.content.value
      }
    });
  };

  const clearCompletedEvents = (event) => {
    event.preventDefault();

    const nextWorks = { ...works };

    for (const i of Object.keys(nextWorks)) {
      if (!nextWorks[i].checked) {
        continue;
      }

      delete nextWorks[i];
    }

    setWorks(nextWorks);
  }

  return (
    <div className="App">
      <h1>Simple Todo</h1>
      {
        Object.entries(works).map(([i, j]) => (
          <div data-index={i} onClick={handleList} key={i}>
            <input type="checkbox" defaultChecked={j.checked} data-action="toggle"/>
            <span>{j.content}</span>
            <button data-action="clear">x</button>
          </div>
        ))
      }
      <form onSubmit={clearCompletedEvents}>
        <button>Clear Completed</button>
      </form>
      <form onSubmit={addEvent}>
        <h2>Add</h2>
        <input name="content"/>
        <button>+</button>
      </form>
    </div>
  );
}

export default App;
