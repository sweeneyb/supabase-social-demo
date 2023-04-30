import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

const supabase = createClient('https://yesvegksruagdpisofzv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllc3ZlZ2tzcnVhZ2RwaXNvZnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4NjMwNzMsImV4cCI6MTk5ODQzOTA3M30.qyhrPb2tQXhQIOEnLdfVsn5dY5haDPA0xFvvVCYVljk')

async function signOut() {
  await supabase.auth.signOut();
}

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['github']}/>)
  }
  else {
    return (
      <div>
        <div>Logged in!</div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    )
  }
}

export default App;
