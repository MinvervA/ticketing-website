import "./LoginPage.css";
import LoginForm from "../../../Components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="LoginPage w-full h-[100vh]">
      <div className="login-page-container grid md:grid-cols-2 grid-cols-1">
        <div className="Login-Page"></div>
        <div className="login-section h-[100vh] px-8 flex items-center bg-white">
          <div className="login-section-container w-[360px] m-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
