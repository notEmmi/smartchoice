import React from 'react';
import "../css/ConfirmationDialog.css";
import { X } from 'lucide-react';

const ConfirmationDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Confirm Action", 
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "default" // "default", "danger", "warning"
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="confirmation-overlay" onClick={handleOverlayClick}>
      <div className="confirmation-dialog">
        <div className="confirmation-header">
          <h3 className="confirmation-title">{title}</h3>
          <button className="confirmation-close" onClick={onClose}>
            <X className="close-icon" />
          </button>
        </div>
        
        <div className="confirmation-body">
          <p className="confirmation-message">{message}</p>
        </div>
        
        <div className="confirmation-actions">
          <button 
            className="confirmation-cancel"
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button 
            className={`confirmation-confirm ${type}`}
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
