import Form from '../components/tags/Form';
import Field from '../components/tags/Field';
import Button from '../components/tags/Button';
import styles from './CardForm.module.scss';

const CardForm = () => {

  return (
    <Form method="POST" className={styles.form}>
      <Field type="text" name="name" placeholder="Agregar nombre" />
      <Field type="text" name="description" placeholder="Agregar descripcion" />
      <Button type="type" > Agregar </Button>
    </Form>
  );

}

export default CardForm;