import Header from "@/components/Header";
import '@/styles/globals.scss'


export default function AuthLayout({ children }) {
  return (
    <div>
      <Header />
        <div className="auth-verivy">
          {children} {/* <-- ini form */}
        </div>
      </div>
  );
}
