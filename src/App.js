import logo from './logo.svg';
import './App.css';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

const supabase = createClient('https://yesvegksruagdpisofzv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllc3ZlZ2tzcnVhZ2RwaXNvZnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4NjMwNzMsImV4cCI6MTk5ODQzOTA3M30.qyhrPb2tQXhQIOEnLdfVsn5dY5haDPA0xFvvVCYVljk')

function App() {
  return (
    <div className="App">
      <Auth supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={['github']}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
