import shared from "../Login/Login.module.css";
import styles from "./Signup.module.css";
import logo from "../../assets/logo.svg";

export default function Signup() {
    return (
        <div className={shared.login}>
            {/* ---------- Left panel ---------- */}
            <section className={shared.left}>
                <h1 className={shared.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img
                    className={shared.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={shared.link}>figma.com/@designspacee</p>
            </section>

            {/* ---------- Right panel ---------- */}
            <section className={shared.right}>
                <div className={`${shared.form} ${styles.form}`}>
                    <h2>Create Account</h2>

                    <div className={styles.social}>
                        <button type="button">Sign up with Google</button>
                        <button type="button">Sign up with Facebook</button>
                    </div>

                    <div className={styles.divider}>OR</div>

                    <input
                        type="text"
                        placeholder="Full Name"
                        aria-label="Full Name"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                    />

                    <button type="button">Create Account</button>

                    <p className={shared.signup}>
                        Already have an account? <a href="#login">Login</a>
                    </p>
                </div>
            </section>
        </div>
    );
}