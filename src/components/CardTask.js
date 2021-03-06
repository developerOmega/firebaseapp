import { useState } from 'react';
import { database } from '../config/firebase';
import Button from './tags/Button';
import Field from './tags/Field';
import Form from './tags/Form';
import Input from './tags/Input';
import Textarea from './tags/Textarea';
import Trash from './icons/Trash';
import styles from './CardTask.module.scss';


const CardTask = ({ name, description, finished, id }) => {

  const [drop, setDrop] = useState(false);

  const styleCard = !drop ? styles.card : `${styles.card} ${styles.animation}`;

  const updateTask  = (self) => {
    const task = {
      name: self.target.name === 'name' ? self.target.value : name,
      description: self.target.name === "description" ? self.target.value : description,
      finished: self.target.name !== "finished" ?  finished : finished === false ? true : false
    }

    let updates = {};
    updates[`/tasks/${id}`] = task;

    return database.ref().update(updates);
  }

  const deleteTask = () => {
    setDrop(true);
    setTimeout( async () => {
      return await database.ref(`/tasks/${id}`).remove();
    }, 1000 );
  }


  return (
    <Form method="POST" className={styleCard} onClick={ (e) => e.preventDefault() }>
      <Input 
        type="text" 
        name="name" 
        placeholder="Agregar nombre"
        className={styles.input}
        value={name}
        onChange = { updateTask } 
      />

      <Textarea
        type="text" 
        name="description" 
        placeholder="Agregar descripcion" 
        className={styles.input}
        value={description}
        onChange = { updateTask } 
      />

      <Field
        type="checkbox" 
        name="finished" 
        label="Finished"
        value={finished ? "true" : "false"}
        className={styles.checkbox}
        onChange = { updateTask }
      />


      <Button 
        type="button" 
        className={styles.btn} 
        onClick={ deleteTask }
      >
        <Trash fill="#FFFFFF" width="20px"/>
      </Button>
      
    </Form>
  );

}

export default CardTask;