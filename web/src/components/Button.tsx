import ButtonInterface from '../interfaces/Button';
import styles from '../styles/Global';

const Button = ({ assetUrl, link }: ButtonInterface) => {
  return (
    <div
      className={`${styles.btnBlack}`}
      onClick={() => window.open(link, '_blank')}
      role="button"
    >
      <img src={assetUrl} alt="Expo Icon" className={`${styles.btnIcon}`} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>View it on</p>
      </div>
    </div>
  );
};

export default Button;
