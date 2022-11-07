import { RotatingLines } from 'react-loader-spinner';
import style from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
