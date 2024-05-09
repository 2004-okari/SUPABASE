import './index.css';
// import react from 'react';
import PhoneSupabase from './Phone/PhoneSupabase';
import EmailVerification from './Email/EmailVerification';

export default function App() {
  return (
    <div>
      <PhoneSupabase />
      <EmailVerification />
    </div>
  );
}
