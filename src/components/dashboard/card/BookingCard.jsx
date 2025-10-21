import styles from '@/styles/components/dashboard/Booking/BookingCard.module.scss';
import Image from 'next/image';

export default function BookingCard({ name,image, id, date, stay, room, status, arrival }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar}><Image src={image} width={48} height={48} alt=''/></div>
          <div className={styles.detailGap}>
            <div className={styles.name}>{name}</div>
            <div className={styles.detail}>
                <span><Image src={'/dashboard/icon/Moon.svg'} width={20} height={20} alt=''/>{stay}</span>
                 <span className={styles.point}></span>
                <span><Image src={'/dashboard/icon/Door.svg'} width={20} height={20} alt=''/>{room}</span>
            </div>
          </div>
        </div>
        <div className={styles.checkout}>
            <span>Check-out</span>
            <span><Image src={"/dashboard/Navigation/Calendar.svg"} width={20} height={20} alt=''/>{arrival}</span>
            </div>
        <div className={styles.checkout}>
            <span>Check-out</span>
            <span><Image src={"/dashboard/Navigation/Calendar.svg"} width={20} height={20} alt=''/>{arrival}</span>
        </div>
        <div className={styles.status}>Status<span>{status}</span></div>
        <div className={styles.link}>See Reservation</div>
      </div>
    </div>
  );
}
