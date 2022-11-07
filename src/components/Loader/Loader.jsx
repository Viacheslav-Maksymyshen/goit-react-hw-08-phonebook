import { Watch } from 'react-loader-spinner';
import style from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#ffffff"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
