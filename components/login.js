import React from 'react';
import styles from '../styles/login.module.css';

const Login = () => {
  return (


    <div className={styles.container}>

      <div className={styles.rightForm}>
        <div className={styles.loginForm}>
          <form action="#" className={styles.form}>
            <div className={styles.logo}>
              <img src="/images-ig/instagram-logo.png" alt="Instagram Logo" />
            </div>

            <input
              className={styles.input}
              type="text"
              name="Username"
              placeholder="Phone number, username, or email"
            />
            <input
              type="password"
              name="pass"
              placeholder="Password"
              className={styles.input}
            />
            <button type="submit" className={styles.submitButton}>
              Log in
            </button>
          </form>


          <div className={styles.divider}>
          <hr className={styles.hr} />
          <span className={styles.orText}>OR</span>
          <hr className={styles.hr} />
        </div>

          <div className={styles.loginFacebook}>
            <img src="./images-ig/fb.png" alt="facebook icon" />
            Log in with Facebook
          </div>
          <div className={styles.forgot}>
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className={styles.createAccount}>
          <span>Don't have an account? </span> <a href="#">Sign up</a>
        </div>
        <div className={styles.apps}>
          <p>Get the app.</p>
          <div className={styles.buttons}>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US" target="_blank">
            <img src="/images-ig/google-play.png" alt="Google Play image" />
            </a>

            <a href='https://apps.microsoft.com/detail/9NBLGGH5L9XT?hl=en-US&gl=US' target="_blank">
            <img src="/images-ig/microsoft.png" alt="Microsoft image" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
