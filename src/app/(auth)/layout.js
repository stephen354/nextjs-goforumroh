import Footer from "@/components/Footer";
import Header from "@/components/Header";
import '@/styles/globals.scss'
import '@/styles/layout/_auth-layout.scss'

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <Header />

      <div className="auth-content">
        <div className="auth-left">
          {children} {/* <-- ini form */}

        </div>

        <div className="auth-right">
            
        </div>
      </div>
    </div>
  );
}
