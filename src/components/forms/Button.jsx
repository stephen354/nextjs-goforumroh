import styles from '@/styles/components/_form.module.scss'
import Image from 'next/image';

export function Button({ children, onClick, type = "button" }) {
  return (
    <button className={`${styles.button} ${styles['button--primary']}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export function ButtonLight({ children, onClick, type = "button" }) {
  return (
    <button className={`${styles.button} ${styles['button--light']}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export function BackButton({onClick, type = "button"}){
    return (
        <div className={styles.buttonBack}>
            <button type={type} onClick={onClick}>
                <Image src={"/icons/Arrow Left.png"} alt='back' width={24} height={24}/>
                Back
            </button>
        </div>
  );
}
