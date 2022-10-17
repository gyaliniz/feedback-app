import { createContext, useState } from "react";

import FeedbackData from './../data/FeedbackData';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [items, setItems] = useState(FeedbackData);
    const [inEditItem, setInEditItem] = useState({
      item: {},
      isEditingEnabled: false
    });
  
    const addFeedback = (newFeedback) => {
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
      const newItems = items.map(item => item.id === itemId ? { ...newItem, id: itemId } : item);
      setItems(newItems);
    };
  
    return <FeedbackContext.Provider 
    value={{
        items,
        inEditItem,
        setInEditItem,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;