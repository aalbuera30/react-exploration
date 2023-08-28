import "./login.css";
import banner from "../assets/hero_app_bar_image.jpg";
import { MyButton } from "../common/custom_buttons";
import { CircularButton } from "../common/circular_custom_button";

function App() {
  return (
    <div className="login-main">
      <img src={banner} className="img-banner" resizeMode="contain" />
      <div className="login-form">
        <MyButton
          onClick={handleClick}
          buttonTitle="Login with email and password"
        />
        <div className="login-divider-container">
          <div className="login-divider" />
          <p>or login with</p>
          <div className="login-divider" />
        </div>
        <div className="social-media-login-container">
          <CircularButton onClick={handleClick} />
          <CircularButton onClick={handleClick} />
        </div>
      </div>
    </div>
  );

  function handleClick() {
    alert("You clicked me!");
  }
}

export default App;

/* <div className="login-form-container">
  <div className="login-form">
    <h1>Let's get started</h1>
    <p>
      Login or register to access your account information,enrolled courses and
      certification.
    </p>
    <CustomTextInput placeholder="Email" />
    <CustomTextInput
      placeholder="Password"
      input_type="password"
      onChange={() => console.log("Test")}
    />
    <MyButton onClick={handleClick}>Login</MyButton>
  </div>
</div>; */
