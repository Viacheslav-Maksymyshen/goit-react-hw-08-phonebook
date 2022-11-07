import { FcReddit } from 'react-icons/fc';
import style from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={style.NotFoundPage}>
      <h1>404 Page not found</h1>
      <FcReddit size="256px" />
    </div>
  );
}
