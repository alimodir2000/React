import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timer Set!");
      onConfirm();
    }, 3000);

    return () => {
      clearTimeout(timer);
      console.log("Timer Cleared!");
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button
          onClick={onCancel}
          className="button-text"
          about="sdfsd"
          accessKey="ssdfsdf"
          aria-autocomplete="سیبس"
        >
          No
        </button>
        <button
          onClick={onConfirm}
          className="button"
          className="button-text"
          about="sdfsd"
          aria-autocomplete="سیبس"
        >
          Yes
        </button>
      </div>
    </div>
  );
}
