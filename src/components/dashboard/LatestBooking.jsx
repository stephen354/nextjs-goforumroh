import styles from '@/styles/components/dashboard/Booking/BookingOverview.module.scss';
import Title from './title/Title';
import BookingCard from './card/BookingCard';

const data = [
  {
    name: 'Kristin Watson',
    id: '#12029283',
    image:"/dashboard/avatar/Avatar.png",
    date: '31 October',
    stay: '1 Nights',
    room: '5 Bedroom',
    price: '$100.00',
    arrival: '8 Des 2021',
    status:'Confirmed',
  },
  {
    name: 'Arlene McCoy',
    id: '#12029283',
    image:"/dashboard/avatar/Avatar-1.png",
    date: '31 October',
    stay: '1 Nights',
    room: '5 Bedroom',
    price: '$100.00',
    arrival: '8 Des 2021',
    status:'Confirmed',
  },
  {
    name: 'Eleanor Pena',
    id: '#12029283',
    image:"/dashboard/avatar/Avatar-2.png",
    date: '31 October',
    stay: '1 Nights',
    room: '5 Bedroom',
    price: '$100.00',
    arrival: '8 Des 2021',
    status:'Confirmed',
  },
];

export default function LatestBooking() {
  return (
   <div>
    <div>
      <Title title="Latest Booking" value="See All Reservation" />
    </div>
      <div className={styles.container}>
      {data.map((item, index) => (
        <BookingCard key={index} {...item} />
      ))}
    </div>
    </div>
  );
}
