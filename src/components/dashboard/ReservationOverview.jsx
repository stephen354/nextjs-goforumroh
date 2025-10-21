import styles from '@/styles/components/dashboard/Reservation/ReservationOverview.module.scss';
import ReservationCard from './card/ReservationCard';
import Title from './title/Title';

const data = [
  {
    name: 'Guy Hawkins',
    id: '#12029283',
    image:"/dashboard/avatar/avatar.png",
    date: '31 October',
    stay: '1 Nights',
    room: '5 Bedroom',
    price: '$100.00',
    arrival: '7 Des 2021 - 8 Des 2021',
  },
  {
    name: 'Annette Black',
    id: '#12029283',
    image:"/dashboard/avatar/avatar-1.png",
    date: '31 October',
    stay: '1 Nights',
    room: '5 Bedroom',
    price: '$100.00',
    arrival: '7 Des 2021 - 8 Des 2021',
  },
  {
    name: 'Eleanor Pena',
    id: '#12029283',
    image:"/dashboard/avatar/avatar-2.png",
    date: '31 October',
    stay: '1 Nights',
    room: '5 Bedroom',
    price: '$100.00',
    arrival: '7 Des 2021 - 8 Des 2021',
  },
];

export default function ReservationOverview() {
  return (
   <div>
    <div>
      <Title title="Reservations Overview" value="See All Reservation" />
    </div>
      <div className={styles.container}>
      <div className={styles.tabs}>
        <span className={styles.active}>Departure</span>
        <span>Arrival</span>
        <span>Stay-over</span>
      </div>
      {data.map((item, index) => (
        <ReservationCard key={index} {...item} />
      ))}
    </div>
    </div>
  );
}
