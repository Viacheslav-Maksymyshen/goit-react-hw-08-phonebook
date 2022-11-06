import { HiOutlineEmojiSad } from 'react-icons/hi';
import style from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={style.NotFoundPage}>
      <h1>404 Page not found</h1>
      <HiOutlineEmojiSad size="256px" />
    </div>
  );
}
