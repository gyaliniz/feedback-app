import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

import Header from './components/Header'
import './index.css'
import AboutPage from './components/pages/AboutPage';

function App() {

  const items = [
    { id: 1, rating: 7, text: 'This is a feedback item 1' },
    { id: 2, rating: 2, text: 'This is a feedback item 2' },
    { id: 3, rating: 1, text: 'This is a feedback item 3' },
  ]

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>

          <Route exact path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats items={items} />
              <FeedbackList items={items} />
            </>
          }> </Route>

          <Route path='/about' element={<AboutPage />}> </Route>
          
        </Routes>
        <AboutIconLink />

      </div>

    </ Router>
  );
}

export default App;
