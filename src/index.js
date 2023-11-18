import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UserCard from './UserCard';



const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <UserCard />
  </StrictMode>
);