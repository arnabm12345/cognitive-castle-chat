import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'b1840c47-2884-4541-be9c-508366432877';

const App = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear local storage and redirect to the login page
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload(); // Reload the page or redirect to the login page
  };
  
  const LogoutButton = () => (
    <button
      style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        marginTop: '1rem',
      }}
      onClick={handleLogout}
    >
      Logout
    </button>
  );

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div style={{height:'100vh'}}>
      <LogoutButton />
    <ChatEngine
      height="95vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
    </div>

  );
};

// infinite scroll, logout, more customizations...

export default App;
