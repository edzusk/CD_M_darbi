import { useTodoListContext } from '../../context/context';
import { deleteTask, getAllTasks } from '../../utils/routes';
import style from './Hero.module.scss'



const Hero = () => {
  const { todoList, settodoList } = useTodoListContext();

  const handleClick = async (id: string) => {
    deleteTask(id);
    await getAllTasks().then((data) => {
      console.log(data);
      settodoList(data);
    });
    console.log(id);
  };

  return (
    <div className="container">
      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr className={style.tablehedding}>
              <th className={style.tableCell}>Task</th>
              <th className={style.tableCell}>Urgency</th>
              <th className={style.tableCell}>Done?</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((task) => (
              <tr key={task._id}>
                <td className={style.tableCell}>{task.task}</td>
                <td className={style.tableCell}>{task.priority}</td>
                <td className={style.tableCell}>
                  <button className={style.delBtn} onClick={() => handleClick(task._id)}>del</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hero