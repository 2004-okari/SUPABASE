import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fluxrkhkghefhjfcuchd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdXhya2hrZ2hlZmhqZmN1Y2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxODQ2MTQsImV4cCI6MjAzMDc2MDYxNH0.P2UP3wQs-dSrAuU-YaYESWWnfBM4ywUHIslwkrUH0aw'
);

const EmailSIgnin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      console.log('User signed in:', data);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default EmailSIgnin;
