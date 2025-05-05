const STORAGE_KEY = 'contacts';

export const saveContacts = contacts => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};

export const loadContacts = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};
