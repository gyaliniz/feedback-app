import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

import Header from './components/Header';
import './index.css';
import AboutPage from './components/pages/AboutPage';

import FeedbackData from './data/FeedbackData';

function App() {
  const [items, setItems] = useState(FeedbackData);
  const [inEditItem, setInEditItem] = useState({
    item:{},
    isEditingEnabled: false
  });

  const addFeedback = (newFeedback) => {
    console.log('add feedback');
    newFeedback.id = items.length + 1;

    setItems([newFeedback, ...items]);
  };

  const deleteFeedback = (itemId) => {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
  };

  const editFeedback = (item) => {
    item.isEditingEnabled = true;
    setInEditItem(item);
  };

  const updateFeedback = (itemId, newItem) => {
    console.log(itemId, newItem)
    const newItems = items.map(item => item.id === itemId ? {...newItem, id: itemId} : item);
    setItems(newItems);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>

          <Route exact path='/' element={
            <>
              <FeedbackForm addFeedback={addFeedback} updateFeedback={updateFeedback} inEditItem ={inEditItem} setInEditItem={setInEditItem} />
              <FeedbackStats items={items} />
              <FeedbackList items={items} deleteFeedback={deleteFeedback} editFeedback={editFeedback} />
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
