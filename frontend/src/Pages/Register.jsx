import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import registerHero from '../assets/images/register_hero.png'
import brandHexagon from '../assets/images/login-ui/hexagon-mobile.svg'
import heroHexagon from '../assets/images/login-ui/hexagon-desktop.svg'
import eyeIcon from '../assets/images/login-ui/eye.svg'
import divider from '../assets/images/login-ui/divider.svg'
import googleIcon from '../assets/images/login-ui/google.svg'
import githubIcon from '../assets/images/login-ui/github.svg'
import './Register.css'
// import userAPI from "../../apis/userAPI";
import axios from 'axios'
import { useAuthContext } from '../contexts/useAuthContext.js'


const apiBaseUrl = import.meta.env.VITE_API_URL
const registrationUrl = `${apiBaseUrl.replace(/\/$/, '')}/api/users/register`

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [notice, setNotice] = useState('')
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate();
    const { authenticate } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNotice('');
        const trimmedName = name.trim()
        const trimmedEmail = email.trim()
        const nextErrors = {}

        if (trimmedName.length < 2) nextErrors.name = 'Please enter at least 2 characters.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) nextErrors.email = 'Please enter a valid email address.'
        if (password.length < 6) nextErrors.password = 'Password must be at least 6 characters.'
        if (password !== confirmPassword) nextErrors.confirmPassword = 'Passwords do not match.'

        setErrors(nextErrors)
        if (Object.keys(nextErrors).length) {
            setNotice('Please correct the highlighted fields.')
            return
        }

        const user = { name: trimmedName, email: trimmedEmail, password, confirmPassword }
        setIsSubmitting(true);
        try {
            const res = await axios.post(`${registrationUrl}`, user, { withCredentials: true });
            if (res.status >= 200 && res.status <= 299) {
                authenticate(res.data.responseUser)
                navigate('/home')
            } else {
                setNotice("Unable to create your account.")
            }
        } catch (error) {
            const serverErrors = error.response?.data?.errors
            if (serverErrors) {
                setErrors({
                    name: serverErrors.name?.msg,
                    email: serverErrors.email?.msg,
                    password: serverErrors.password?.msg,
                    confirmPassword: serverErrors.confirmPassword?.msg,
                })
                setNotice('Please correct the highlighted fields.')
            } else {
                setNotice(error.response?.data?.message || 'Unable to reach the registration service.')
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="register-page">
            <section className="register-hero" style={{ '--register-hero-image': `url(${registerHero})` }}>
                <div className="register-brand">
                    <span className="register-brand-mark"><img src={heroHexagon} alt="" /></span>
                    <span>Aura SaaS</span>
                </div>
                <div className="register-hero-copy">
                    <h1>Design with zero constraints</h1>
                    <p>Deploy your code, trace production events instantly, and work cohesively with fellow engineers under one beautiful interface.</p>
                </div>
                <p className="register-copyright">© 2024 Aura Inc. All rights reserved.</p>
            </section>

            <section className="register-panel" aria-label="Create your account">

                <div className="register-panel-content">
                    <div className="register-mobile-brand register-brand">
                        <span className="register-brand-mark"><img src={brandHexagon} alt="" /></span>
                        <span>Aura SaaS</span>
                    </div>

                    <div className="register-heading">
                        <div className="register-heading-desktop">
                            <h1>Create your account</h1>
                            <p>Get full-fidelity access immediately. No credit card required.</p>
                        </div>
                        <div className="register-heading-mobile">
                            <h1>Get started</h1>
                            <p>Create your account in just a few steps</p>
                        </div>
                    </div>

                    <form className="register-form" onSubmit={handleSubmit}>
                        <div className="register-fields">
                            <div className="register-field">
                                <label htmlFor="register-name">Full Name</label>
                                <div className="register-input-wrap">
                                    <input
                                        id="register-name"
                                        type="text"
                                        placeholder="Alex Wong"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                            setErrors((current) => ({ ...current, name: undefined }))
                                        }}
                                        aria-invalid={Boolean(errors.name)}
                                    />
                                </div>
                                {errors.name && <p className="register-field-error">{errors.name}</p>}
                            </div>
                            <div className="register-field">
                                <label htmlFor="register-email">Email Address</label>
                                <div className="register-input-wrap">
                                    <input
                                        id="register-email"
                                        type="email"
                                        placeholder="alex@aura.com"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            setErrors((current) => ({ ...current, email: undefined }))
                                        }}
                                        aria-invalid={Boolean(errors.email)}
                                    />
                                </div>
                                {errors.email && <p className="register-field-error">{errors.email}</p>}
                            </div>
                            <div className="register-field">
                                <label htmlFor="register-password">Password</label>
                                <div className="register-input-wrap">
                                    <input
                                        id="register-password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        autoComplete="new-password"
                                        minLength="6"
                                        required
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            setErrors((current) => ({ ...current, password: undefined, confirmPassword: undefined }))
                                        }}
                                        aria-invalid={Boolean(errors.password)}
                                    />
                                    <button className="register-password-toggle" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((visible) => !visible)}>
                                        <img src={eyeIcon} alt="" />
                                    </button>
                                </div>
                                {errors.password && <p className="register-field-error">{errors.password}</p>}
                            </div>
                            <div className="register-field">
                                <label htmlFor="register-confirm-password">Confirm Password</label>
                                <div className="register-input-wrap">
                                    <input
                                        id="register-confirm-password"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        autoComplete="new-password"
                                        minLength="6"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value)
                                            setErrors((current) => ({ ...current, confirmPassword: undefined }))
                                        }}
                                        aria-invalid={Boolean(errors.confirmPassword)}
                                    />
                                    <button className="register-password-toggle" type="button" aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'} onClick={() => setShowConfirmPassword((visible) => !visible)}>
                                        <img src={eyeIcon} alt="" />
                                    </button>
                                </div>
                                {errors.confirmPassword && <p className="register-field-error">{errors.confirmPassword}</p>}
                            </div>
                            <label className="register-consent">
                                <input type="checkbox" name="consent" required />
                                <span className="register-consent-copy">
                                    <span className="register-consent-desktop">By checking this, I agree to Aura's </span>
                                    <span className="register-consent-mobile">I agree to Aura's </span>
                                    <span className="register-legal-link">Terms of Service</span>
                                    <span> and </span>
                                    <span className="register-legal-link">Privacy Policy</span>
                                </span>
                            </label>
                            {notice && <p className="register-notice" role="status">{notice}</p>}
                            <button className="register-submit" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </div>

                        <div className="register-social">
                            <div className="register-divider" aria-label="or continue with">
                                <img src={divider} alt="" />
                                <span>or continue with</span>
                                <img src={divider} alt="" />
                            </div>
                            <div className="register-social-buttons">
                                <button className="register-social-button" type="button" onClick={() => setNotice('Google sign-in is not available yet.')}>
                                    <img src={googleIcon} alt="" /><span>Google</span>
                                </button>
                                <button className="register-social-button" type="button" onClick={() => setNotice('GitHub sign-in is not available yet.')}>
                                    <img src={githubIcon} alt="" /><span>GitHub</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="register-footer">
                    <span>Already have an account?</span>
                    <Link to="/">Log in</Link>
                </div>

                <div className="register-home-indicator" aria-hidden="true"><span /></div>
            </section>
        </main>
    )
}