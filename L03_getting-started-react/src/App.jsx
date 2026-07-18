import './App.css'

function App() {
    return (
        <div className="app">

            {/* ===== HEADER ===== */}
            <header className="header">
                <h1>About Me</h1>
                <hr className="divider-line" />
            </header>

            {/* ===== PROFILE ===== */}
            <section className="profile">
                <h2>👋 Hello, I'm <span className="highlight">Rimer-Rey A. Gabaleo</span></h2>

                <ul className="info-list">
                    <li><strong>📚 Course:</strong> Bachelor of Science in Information Systems</li>
                    <li><strong>🎓 Year:</strong> 3rd Year</li>
                    <li><strong>💡 Fun Fact:</strong> I like designing and doing something new</li>
                </ul>
            </section>

            <hr className="section-divider" />

            {/* ===== REFLECTION ===== */}
            <section className="reflection">
                <h2>📖 Reflection</h2>

                <p>
                  today i learned about important things about react and why we should learn it , not just from being in demand and it has many users it also support many frameworks. also about  how laravel and php is still breathing even on how they are being killed by haters over the years. also about how to differentiate the git commands git merge and git re base . 
                </p>

                <p>
                    though we somehow forgot some of java script basic information there are still some that i remember and also id like to have a refresher. this lesson taught me that everyone should have a refresher and we should always learn and practice even not here in class.
                </p>

                <p>
                    Looking ahead, I'm excited to apply these skills to future projects and
                    eventually build applications in react. As an Information Systems student,
                    I believe that understanding both the technical and business sides of technology
                    will be a huge asset. This course has given me a strong foundation, and I can't
                    wait to see where this journey takes me.
                </p>
            </section>

            <hr className="section-divider" />

            {/* ===== SKILLS LEARNED ===== */}
            <section className="skills-learned">
                <h2>🛠️ Skills I've Developed</h2>

                <ul className="skills-list">
                    <li>✅ React components & JSX syntax</li>
                    <li>✅ State management with useState hook</li>
                    <li>✅ Working with props and data flow</li>
                    <li>✅ Debugging and problem-solving</li>
                    <li>✅ Writing semantic, accessible HTML</li>
                </ul>
            </section>

            <hr className="section-divider" />

            {/* ===== FOOTER ===== */}
            <footer className="footer">
                <p>© 2026 Maria Santos — IS 2nd Year</p>
            </footer>

        </div>
    )
}

export default App