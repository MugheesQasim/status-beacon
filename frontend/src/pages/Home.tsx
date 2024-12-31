import React, { useState } from 'react';
import { Button } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div>
            <Button variant="outlined" href="/signup">Signup</Button>
            <Button variant="outlined" href="/login">Login</Button>
        </div>
    );
}

export default Home;
