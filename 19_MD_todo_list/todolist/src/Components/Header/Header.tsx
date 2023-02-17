import { useState } from 'react';
import { useTodoListContext } from '../../context/context';
import { addTask, getAllTasks, getByPrior, Priority } from '../../utils/routes';
import style from './Header.module.scss'

const Header = () => {
  const [newtask, setNewTask] = useState("");
  const [priority, setPriority] = useState<Priority>("urgent");

  const { todoList, settodoList } = useTodoListContext();


  const handleOptionalclick = async () => {
    await getByPrior('optional').then(data => {
      settodoList(data)
    })
  }
  const handleAllclick = async () => {
    await getAllTasks().then((data) => {
      settodoList(data)
    })
  }
  const handleUrgentclick = async () => {
    await getByPrior('urgent').then(data => {
      settodoList(data)
    })
  }
  const handleSoonclick = async () => {
    getByPrior('soon').then(data => {
      settodoList(data)
    })
  }



  const handlesubmit = async () => {
    addTask(newtask, priority)
    setNewTask('')
    await getAllTasks().then((data) => {
      console.log(data);
      settodoList(data);
      
    });
  };

  return (
    <div className="container">
      <div className="row">
        <nav className={style.nav}>
          <li className={style.navElem}>
            <button
              onClick={() => handleAllclick()}
              className={style.navButton}
            >
              All Tasks
            </button>
          </li>
          <li className={style.navElem}>
            <button
              onClick={() => handleUrgentclick()}
              className={style.navButton}
            >
              Urgent Tasks
            </button>
          </li>
          <li className={style.navElem}>
            <button
              onClick={() => handleSoonclick()}
              className={style.navButton}
            >
              'Soon' Tasks
            </button>
          </li>
          <li className={style.navElem}>
            <button
              onClick={() => handleOptionalclick()}
              className={style.navButton}
            >
              Optional Tasks
            </button>
          </li>
        </nav>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlesubmit();
          }}
          action=""
        >
          <div className={style.formWrapper}>
            <label htmlFor="">
              new task? <br />
              <input
                className={style.textInput}
                onChange={(e) => setNewTask(e.target.value)}
                value={newtask}
                required={true}
                type="text"
                name=""
                id=""
              />
            </label>
            <select
              className={style.select}
              required={true}
              onChange={(e) => setPriority(e.target.value as Priority)}
              name=""
              id=""
            >
              <option value="urgent">urgent</option>
              <option value="soon">soon</option>
              <option value="optional">optional</option>
            </select>
            <button className={style.navButton}>Add new Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;