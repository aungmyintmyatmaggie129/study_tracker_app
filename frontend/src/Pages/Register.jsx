import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import registerHero from '../assets/images/register_hero.png'
import brandHexagon from '../assets/images/login-ui/hexagon-mobile.svg'
import heroHexagon from '../assets/images/login-ui/hexagon-desktop.svg'
import eyeIcon from '../assets/images/login-ui/eye.svg'
import divider from '../assets/images/login-ui/divider.svg'
import googleIcon from '../assets/images/login-ui/google.svg'
import githubIcon from '../assets/images/login-ui/github.svg'
import signalIcon from '../assets/images/login-ui/signal.svg'
import wifiIcon from '../assets/images/login-ui/wifi.svg'
import batteryIcon from '../assets/images/login-ui/battery.svg'
import './Register.css'
// import userAPI from "../../apis/userAPI";
import axios from 'axios'
const apiBaseUrl = import.meta.env.VITE_API_URL || '/api'
const registrationUrl = `${apiBaseUrl.replace(/\/$/, '')}/users/register`

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [notice, setNotice] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        setNotice('');
        const user = {name,email,password,confirmPassword}
        // console.log(user);
        
        if(password !== confirmPassword){
            setNotice("Passwords do not match.");
            return
        }
        setIsSubmitting(true);
        try{
            const res = await axios.post(`http://localhost:4000/api/users/register`, user);
        console.log(res);
        setNotice("Your account have been created. You can now login.")
        if(res.status == 200){
            navigate('/')
        }else{
            setNotice("Unable to create your account.")
        }
        }catch(error){
            console.log(error)
            setNotice(error.message || 'Unable to reach the registration service.')
        }finally{
            setIsSubmitting(false);
        }
    }

    // console.log({name, email, password, confirmPassword});
    // async function handleSubmit(event) {
    //     event.preventDefault()
    //     setNotice('')
    
    //     console.log({name, email, password, confirmPassword});

    //     const formElement = event.currentTarget
    //     const formData = new FormData(formElement)
    //     const passwordCheck = password;
    //     const confirmPassword = confirmPassword;

    //     if (passwordCheck !== confirmPassword) {
    //         setNotice('Passwords do not match.')
    //         return
    //     }

    //     setIsSubmitting(true)
    //     try {
    //         // registrationUrl
    //         const response = await axios.post("http://localhost:4000/api/users/register", {
    //             name: name,
    //             email: email,
    //             password: password,
    //         })
    //         const result = await response.json({name, email, password})

    //         if (!response.status === 200) {
    //             throw new Error(result.message || 'Unable to create your account.')
    //         }

    //         setNotice('Your account has been created. You can now log in.')
    //         formElement.reset()
    //     } catch (error) {
    //         setNotice(error.message || 'Unable to reach the registration service.')
    //     } finally {
    //         setIsSubmitting(false)
    //     }
    // }

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
                <div className="register-status-bar" aria-hidden="true">
                    <span>9:41</span>
                    <span className="register-status-icons">
                        <img src={signalIcon} alt="" />
                        <img src={wifiIcon} alt="" />
                        <img src={batteryIcon} alt="" />
                    </span>
                </div>

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
                                    onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className="register-password-toggle" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((visible) => !visible)}>
                                        <img src={eyeIcon} alt="" />
                                    </button>
                                </div>
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
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <button className="register-password-toggle" type="button" aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'} onClick={() => setShowConfirmPassword((visible) => !visible)}>
                                        <img src={eyeIcon} alt="" />
                                    </button>
                                </div>
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