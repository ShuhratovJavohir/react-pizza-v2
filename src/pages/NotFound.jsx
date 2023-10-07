import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Чувак тыпоходу по путал || Базару ноль возможно я попутал</h2>
      <p>По этому пути ничего нету. По этому тыкни сюда и всё</p>
      <Link to="/">ТЫКНУТЬ СЮДА</Link>
    </div>
  );
};

export default NotFound;
