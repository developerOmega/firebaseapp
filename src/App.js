import './styles/App.scss';
import { database } from './config/firebase';
import { useState, useEffect } from 'react';

import CardTask from './components/CardTask';
import Form from './components/tags/Form';
import Button from './components/tags/Button';
import Input from './components/tags/Input';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    database.ref("tasks").on('value', (taskData) => {
      let data = taskData.val();

      for( const property in data ) {
        data[property].id = property
      }

      let taskVal = Object.values(data);
      setTasks( taskVal );
    });    
  }, []);
  

  return tasks.map( task => (
    <CardTask key={task.id} id={task.id} name={task.name} description={task.description} finished={task.finished} />
  )); 
}

function App() {

  const addTasks = (name = "", description = "", finished = false) => {
    const task = {
      name: name,
      description: description,
      finished: finished
    }

    const newTask = database.ref().child('tasks').push().key;
    let updates = {};
    updates[`/tasks/${newTask}`] = task;
  
    return database.ref().update(updates);
  }

  return (
    <div className="content">
      <Form method="POST" className="form" onSubmit={(e) => {
        e.preventDefault();
        addTasks( e.target.name.value, e.target.description.value );
        console.log(e.target.name.value, e.target.description.value)
      }}>
        <Input type="text" label="Agregar nombre" name="name" placeholder="Agregar nombre" className="input" />
        <Input type="text" label="Agregar descripcion" name="description" placeholder="Agregar descripcion" className="input" />
        <Button type="submit" className="btn" > Agregar </Button>
      </Form>

      <Tasks />
    </div>
  );
}

export default App;