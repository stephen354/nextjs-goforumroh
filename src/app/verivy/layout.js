import Header from "@/components/Header";
import '@/styles/globals.scss'

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <Header />

        <div>
          {children} {/* <-- ini form */}
        </div>
      </div>
  );
}
