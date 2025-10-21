import styles from '@/styles/components/dashboard/Reservation/ReservationCard.module.scss';
import Image from 'next/image';

export default function ReservationCard({ name,image, id, date, stay, room, price, arrival }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.avatar}><Image src={image} width={48} height={48}  alt=''/></div>
          <div className={styles.detailGap}>
            <div className={styles.name}>{name}</div>
            <div className={styles.detail}>
                <span>{id}</span>
                <span className={styles.point}></span>
                <span><Image src={'/dashboard/icon/Moon.svg'} width={20} height={20} alt=''/>{stay}</span>
                 <span className={styles.point}></span>
                <span><Image src={'/dashboard/icon/Door.svg'} width={20} height={20} alt=''/>{room}</span>
            </div>
          </div>
        </div>
        <div className={styles.date}>
          <span>{date}</span>
        </div>
        <div className={styles.arrival}>
            <span><Image src={"/dashboard/Navigation/Calendar.svg"} width={20} height={20} alt=''/>{arrival}</span>
            <span>Arrival : 1:00 PM - 1:00 PM</span>
            </div>
        <div className={styles.price}>{price}</div>
        <div className={styles.link}>Detail Order</div>
      </div>
    </div>
  );
}
