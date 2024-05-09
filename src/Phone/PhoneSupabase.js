import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fluxrkhkghefhjfcuchd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdXhya2hrZ2hlZmhqZmN1Y2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxODQ2MTQsImV4cCI6MjAzMDc2MDYxNH0.P2UP3wQs-dSrAuU-YaYESWWnfBM4ywUHIslwkrUH0aw'
);

const PhoneSupabase = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  console.log(phone)
  const handleSendOTP = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        phone,
      });
      if (error) {
        console.error('Error sending OTP:', error.message);
      } else {
        console.log('OTP Sent:', data);
      }
    } catch (error) {
      console.error('Error sending OTP: catch', error.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      if (!otp) {
        console.error('OTP is empty');
        return;
      }
  
      const { data, error } = await supabase.auth.verifyOtp({
        phone,
        token: otp,
        type: 'sms', // Specify the type as 'sms' for SMS OTP verification
      });
      if (error) {
        console.error('Error verifying OTP:', error.message);
      } else {
        console.log('OTP Verified:', data);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
    }
  };
  

  return (
    <div>
      <div>Phone Supabase</div>
      <div>
        <PhoneInput
          placeholder="Enter phone number"
          value={phone}
          onChange={(text) => setPhone(text)}
        />
      </div>
      <div>
        <input
          type="numeric"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={handleSendOTP}>
          Send OTP
        </button>
        <button type="button" onClick={handleVerifyOTP}>
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default PhoneSupabase;
