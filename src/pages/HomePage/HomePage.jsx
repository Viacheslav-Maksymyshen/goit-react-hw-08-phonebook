import { FcBusiness } from 'react-icons/fc';
import style from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={style.NotFoundPage}>
      <h1>Corporate directory of contacts.</h1>
      <FcBusiness size="256px" />
    </div>
  );
}
