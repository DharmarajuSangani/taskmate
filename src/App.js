import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const[theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const[task, setTask] = useState('');
    const[tasks, setTasks] = useState([]);
    const[edited, setEdited] = useState(0);

    const date = new Date();

    const addTask = () => {
        if(task.trim() === '') {
            alert('Please enter a task!');
            return;
        }
        if(edited) {
            const updatedTasks = tasks.map(t => t.id === edited ? { ...t, text: task, timestamp: `${date.toLocaleTimeString()},  ${date.toLocaleDateString()}`, done: t.done } : {id: t.id, text: t.text, timestamp: t.timestamp, done: t.done});
            setTasks(updatedTasks);
            setEdited(0);
            setTask('');
            return;
        }
        const newTask = {
            id: date.getTime(),
            text: task,
            timestamp: `${date.toLocaleTimeString()},  ${date.toLocaleDateString()}`,
            done: false
        };
        setTasks([...tasks, newTask]);
        setTask('');
    };

    const clearTasks = () => {
        setTasks([]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id) => {
        const taskToEdit = tasks.find(task => task.id === id);
        setTask(taskToEdit.text);
        setEdited(id);
    }

    const toggleTask = (id) => {
        const updatedTasks = tasks.map(task => task.id === id ? { ...task, timestamp: `${date.toLocaleTimeString()},  ${date.toLocaleDateString()}`, done: true } : task);
        setTasks(updatedTasks);
    }

  return (
    <div className="App">

      <Header setTheme={setTheme} theme={theme} toggleTheme={toggleTheme} />
      <Main 
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
        edited={edited}
        setEdited={setEdited}
        addTask={addTask}
        clearTasks={clearTasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTask={toggleTask}
      />
      <Footer />
      
    </div>
  );
}

export default App;
