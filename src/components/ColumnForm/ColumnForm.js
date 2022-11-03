import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = props => {

  const [titleValue, setTitleValue] = useState('abc');
  const [iconValue, setIconValue] = useState('ic');

  const addColumn = e => {
    e.preventDefault();

    props.action({ title: titleValue, icon: iconValue });

    setTitleValue('');
    setIconValue('');
  }

  return (
    <form onSubmit={addColumn}>
      <a> Title: </a>
      <input className={styles.input} type="text" value={titleValue} onChange={e => setTitleValue(e.target.value)} />
      <a> Icon: </a>
      <input className={styles.input} type="text" value={iconValue} onChange={e => setIconValue(e.target.value)}/>
      <a> </a>
      <button className={styles.button}>Add column</button>
    </form>
   );
  };
  

export default ColumnForm;