import React, { useState } from 'react';
import Container from './shared/Container';
import Postselector from './components/Postselector';
import Comments from './components/Comments';


const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
      setSelectedPostId(e.target.value);
  };

  return (
   <Container>
        <div>
            <h1 className='font-bold text-2xl py-2'>React Suspense and Error Boundaries</h1>
            <Postselector onSelectPost={handleSelectPost} />         
            {selectedPostId &&  <Comments postId={selectedPostId} />}    
        </div>
   </Container>
  );
};

export default App;