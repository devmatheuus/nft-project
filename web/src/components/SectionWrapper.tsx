import assets from '../assets';
import SectionWrapperInterface from '../interfaces/SectionWrapper';
import styles from '../styles/Global';
import Button from './Button';

const SectionWrapper = (data: SectionWrapperInterface) => {
  return (
    <div
      className={`min-h-screen ${styles.section}
       ${data.reverse ? styles.bgWhite : styles.bgPrimary}
        ${data?.banner ? data.banner : ''}`}
    >
      <div
        className={`
          flex items-center 
          ${data.reverse ? styles.boxReverseClass : styles.boxClass}
          w-11/12 sm:w-full minmd:w-3/4
        `}
      >
        <div
          className={`
          ${styles.descDiv}
          ${data.reverse ? 'fadeRightMini' : 'fadeLeftMini'}
          ${data.reverse ? `${styles.textRight}` : `${styles.textLeft}`}
        `}
        >
          <h1
            className={`
            ${styles.h1Text} 
            ${data.reverse ? styles.blackText : styles.whiteText}
            `}
          >
            {data.title}
          </h1>
          <p
            className={`
          ${styles.descriptionText} 
          ${data.reverse ? styles.blackText : styles.whiteText}
          `}
          >
            {data.description}
          </p>
          {data.showBtn && <Button assetUrl={assets.expo} link="#" />}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={data.mockupImg}
            alt={data.title}
            className={`
            ${styles.sectionImg}
            ${data.reverse ? 'fadeLeftMini' : 'fadeRightMini'}
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
