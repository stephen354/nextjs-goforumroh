import styles from '@/styles/components/dashboard/dashboard.module.scss';
import ReservationOverview from '@/components/dashboard/ReservationOverview';
import LatestBooking from '@/components/dashboard/LatestBooking';

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <ReservationOverview />
      <LatestBooking />
    </div>
  );
}
