import styles from './Login.module.css'
import leafyBackground from '../../assets/leafy-background.png'
import googleIcon from '../../assets/google-icon.svg'
import facebookIcon from '../../assets/facebook-icon.svg'

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className={styles.loginPage}>
      <img
        className={styles.artwork}
        src={leafyBackground}
        alt=""
      />

      <section className={styles.content}>
        <h1 className={styles.heading}>
          <span className={styles.hello}>Hello</span>
          <span className={styles.comma}>,</span>{' '}
          <span className={styles.guyss}>Guyss!</span>
        </h1>

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${styles.activeTab}`}
          >
            Login
          </button>

          <button type="button" className={styles.tab}>
            SignUp
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <label className={styles.visuallyHidden} htmlFor="email">
              Email address
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />

            <label className={styles.visuallyHidden} htmlFor="password">
              Password
            </label>
            <input
              className={styles.input}
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              autoComplete="current-password"
              required
            />
          </div>

          <button className={styles.loginButton} type="submit">
            Login
          </button>

          <p className={styles.separator}>Or</p>

          <div className={styles.socialButtons}>
            <button
              className={styles.socialButton}
              type="button"
              aria-label="Continue with Google"
            >
              <img src={googleIcon} alt="" width="38" height="38" />
            </button>

            <button
              className={styles.socialButton}
              type="button"
              aria-label="Continue with Facebook"
            >
              <img src={facebookIcon} alt="" width="35" height="35" />
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}