import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/useAuthContext.js'
import loginHero from '../assets/images/login_hero.png'
import eyeIcon from '../assets/images/login-ui/eye.png'
import eyeCloseIcon from "../assets/images/login-ui/eyeclose.png"
import googleIcon from '../assets/images/login-ui/google.png'
import githubIcon from '../assets/images/login-ui/github.png'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [notice, setNotice] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const { login } = useAuthContext()

    async function handleSubmit(event) {
        event.preventDefault()
        setNotice('')
        setIsSubmitting(true)

        const formData = new FormData(event.currentTarget)
        const credentials = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        try {
            await login(credentials)
            navigate('/home')
        } catch (error) {
            setNotice(
                error.response?.data?.errors?.email?.msg
                || error.response?.data?.message
                || 'Unable to reach the login service.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="login-page">
            <section className="login-hero" style={{ '--login-hero-image': `url(${loginHero})` }}>
                <div className="login-hero-copy">
                    <h1>Supercharge your creative workspace</h1>
                    <p>Join thousands of developers and teams utilizing Aura to orchestrate stunning real-time analytics with unparalleled ease.</p>
                </div>
                <p className="login-copyright">© 2026 Study Tracker Inc. All rights reserved.</p>
            </section>

            <section className="login-panel" aria-label="Sign in">
                <div className="login-panel-content">
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
                                            {showPassword ? <img src={eyeCloseIcon} alt="" /> : <img src={eyeIcon} alt="" />}
                                        </button>
                                    </div>
                                </div>
                                <div className="login-form-options">
                                    <label className="login-remember"><input type="checkbox" name="remember" /> <span>Remember me</span></label>
                                    <button className="login-action-link" type="button" onClick={() => setNotice('Password reset is not available yet.')}>Forgot password?</button>
                                </div>
                            </div>
                        </div>

                        <button className="login-submit" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Logging In...' : 'Log In'}
                        </button>

                        <div className="login-social">
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