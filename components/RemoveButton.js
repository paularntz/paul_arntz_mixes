"use client";

import { useState } from 'react';

export default function RemoveButton({ fileName }) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = async () => {
    const confirmation = confirm('Are you sure you want to remove this message from the list?');
    if (confirmation) {
      setIsRemoving(true);

      try {
        const response = await fetch(`/api/messages/${fileName}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Message removed successfully!');
          window.location.reload(); // Refresh the page to update the list
        } else {
          const errorData = await response.json();
          console.error('Error removing message:', errorData);
          alert(`Failed to remove the message: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Error removing message:', error);
        alert('An error occurred while trying to remove the message.');
      } finally {
        setIsRemoving(false);
      }
    }
  };

  return (
    <button
      onClick={handleRemove}
      disabled={isRemoving}
      className="text-red-500 hover:underline ml-4"
    >
      {isRemoving ? 'Removing...' : 'Remove'}
    </button>
  );
}
