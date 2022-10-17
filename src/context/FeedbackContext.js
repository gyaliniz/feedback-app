import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([]);
  const [inEditItem, setInEditItem] = useState({
    item: {},
    isEditingEnabled: false
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc')
    const data = await response.json()
    setItems(data)
    setIsLoading(false)
  }

  const addFeedback = async (newFeedback) => {
    //newFeedback.id = items.length + 1;
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    });

    const data = await response.json();
    setItems([data, ...items]);
  };

  const deleteFeedback = async (itemId) => {
    if (window.confirm('Are you sure you want to remove the feedback')) {
      await fetch(`/feedback/${itemId}`, { method: 'DELETE' })

      const newItems = items.filter(item => item.id !== itemId);
      setItems(newItems);

      setInEditItem({
        item: {},
        isEditingEnabled: false,
      });
    }
  };

  const updateFeedback = async (itemId, newItem) => {
    const response = await fetch(`/feedback/${itemId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem)
      })

    const data = await response.json();

    //const newItems = items.map(item => item.id === itemId ? { ...newItem, id: itemId } : item);
    const newItems = items.map(item => item.id === itemId ? data : item);

    setItems(newItems);

    setInEditItem({
      item: {},
      isEditingEnabled: false,
    });

  };

  const editFeedback = (item) => {
    setInEditItem({
      ...item,
      isEditingEnabled: true
    });
  };

  return <FeedbackContext.Provider
    value={{
      items,
      inEditItem,
      isLoading,
      setInEditItem,
      addFeedback,
      deleteFeedback,
      updateFeedback,
      editFeedback

    }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;