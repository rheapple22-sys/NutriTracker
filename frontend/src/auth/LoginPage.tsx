import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import BannerImg from "../assets/BannerImg.png";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="max-w-7xl mx-auto px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT CONTENT */}
        <div className="p-10 rounded-xl">
          <h1 className="text-4xl font-extrabold text-green-700">
            Control Your Nutrition.<br />
            Achieve Your Goals.<br />
            Live Healthy.
          </h1>

          <p className="mt-6 text-gray-700">
            Smart calorie counting, progress tracking, and personalized
            recommendations powered by AI.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Track meals anywhere</li>
            <li>• Detailed nutrition insights</li>
            <li>• Scientific goal tracking</li>
            <li>• Accurate food database</li>
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <GoogleLogin width={'200px'}
              onSuccess={(res) => {
                const decoded: any = jwtDecode(res.credential!);

                login(res.credential!);

                navigate("/", { replace: true });
              }}
              onError={() => console.log("Login failed")}
            />
          </div>
        </div>

        {/* RIGHT IMAGE (kept empty since background already covers) */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
