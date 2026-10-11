import { useState } from 'react'
import { Link } from 'react-router-dom'
import loginHero from '../assets/images/login_hero.png'
import brandHexagon from '../assets/images/login-ui/hexagon-mobile.svg'
import heroHexagon from '../assets/images/login-ui/hexagon-desktop.svg'
import eyeIcon from '../assets/images/login-ui/eye.svg'
import divider from '../assets/images/login-ui/divider.svg'
import googleIcon from '../assets/images/login-ui/google.svg'
import githubIcon from '../assets/images/login-ui/github.svg'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [notice, setNotice] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        setNotice('Sign-in is not connected to an account service yet.')
    }

    return (
        <main className="login-page">
            <section className="login-hero" style={{ '--login-hero-image': `url(${loginHero})` }}>
                <div className="login-brand">
                    <span className="login-brand-mark"><img src={heroHexagon} alt="" /></span>
                    <span>Aura SaaS</span>
                </div>
                <div className="login-hero-copy">
                    <h1>Supercharge your creative workspace</h1>
                    <p>Join thousands of developers and teams utilizing Aura to orchestrate stunning real-time analytics with unparalleled ease.</p>
                </div>
                <p className="login-copyright">© 2024 Aura Inc. All rights reserved.</p>
            </section>

            <section className="login-panel" aria-label="Sign in">
                <div className="login-panel-content">
                    <div className="login-mobile-brand login-brand">
                        <span className="login-brand-mark"><img src={brandHexagon} alt="" /></span>
                        <span>Aura SaaS</span>
                    </div>

                    <div className="login-heading">
                        <div className="login-heading-desktop">
                            <h1>Log in to your account</h1>
                            <p>Securely access your active cloud projects and settings.</p>
                        </div>
                        <div className="login-heading-mobile">
                            <h1>Welcome back</h1>
                            <p>Please enter your details to sign in</p>
                        </div>
                    </div>

                    <form className="login-form-stack" onSubmit={handleSubmit}>
                        <div className="login-fields">
                            <div className="login-field">
                                <label htmlFor="login-email">Email Address</label>
                                <div className="login-input-wrap">
                                    <input id="login-email" name="email" type="email" placeholder="alex@aura.com" autoComplete="email" required />
                                </div>
                            </div>

                            <div className="login-password-field">
                                <div className="login-field">
                                    <label htmlFor="login-password">Password</label>
                                    <div className="login-input-wrap">
                                        <input id="login-password" name="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" autoComplete="current-password" required />
                                        <button className="login-password-toggle" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((visible) => !visible)}>
                                            <img src={eyeIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="login-form-options">
                                    <label className="login-remember"><input type="checkbox" name="remember" /> <span>Remember me</span></label>
                                    <button className="login-action-link" type="button" onClick={() => setNotice('Password reset is not available yet.')}>Forgot password?</button>
                                </div>
                            </div>
                        </div>

                        <button className="login-submit" type="submit">Log In</button>

                        <div className="login-social">
                            <div className="login-divider" aria-label="or continue with">
                                <img src={divider} alt="" />
                                <span>or continue with</span>
                                <img src={divider} alt="" />
                            </div>
                            <div className="login-social-buttons">
                                <button className="login-social-button" type="button" onClick={() => setNotice('Google sign-in is not available yet.')}>
                                    <img src={googleIcon} alt="" /><span>Google</span>
                                </button>
                                <button className="login-social-button" type="button" onClick={() => setNotice('GitHub sign-in is not available yet.')}>
                                    <img src={githubIcon} alt="" /><span>GitHub</span>
                                </button>
                            </div>
                        </div>
                        {notice && <p className="login-notice" role="status">{notice}</p>}
                    </form>
                </div>

                <div className="login-footer">
                    <span>Don't have an account?</span>
                    <Link className="login-action-link" to="/register">Sign up<span className="login-signup-desktop"> for free</span></Link>
                </div>
            </section>
        </main>
    )
}