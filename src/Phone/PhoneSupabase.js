import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const PhoneSupabase = () => {

  const [phone, setPhone] = useState('');

  const { data, error } = await supabase.auth.signInWithOtp({
    phone,
  })

  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    phone: '+13334445555',
    token: '123456',
    type: 'sms',
  })
  

  return (
    <div>
      <div>Phone Supabase</div>
      <div>
        <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={(text) => setPhone(text)}/>
      </div>
      <div>
        <input type="numeric" value={otp} onChange={(e) => setOtp(e.target.value)} />
      </div>
      <div>
        <button type='button' onClick={() => { console.log('Okari Nyandika')}}>Send OTP</button>
        <button type='button' onClick={() => { console.log('Okari Nyandika')}}>Verify OTP</button>
      </div>
    </div>
  )
}

export default PhoneSupabase