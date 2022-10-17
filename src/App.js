import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

import Header from './components/Header'
import './index.css'

function App() {

  const items = [
    {id: 1, rating: 7, text: 'This is a feedback item 1'},
    {id: 2, rating: 2, text: 'This is a feedback item 2'},
    {id: 3, rating: 1, text: 'This is a feedback item 3'},
]

  return (
    <>
    <Header/>
    <div className="container">
      <FeedbackForm />
    <FeedbackStats items={items} />
    <FeedbackList items={items} />
    <AboutIconLink />
    </div>
    </>
  );
}

export default App;
