import { useEffect } from "react";
import ReactDOM from "react-dom";
import { GoCheck, GoX } from "react-icons/go";
import classes from './index.module.css';

const Modal =({ title, show, onClose, filters, onClearFilters, onSubmit, children, cname })=> {
  useEffect(() => {
    const close = (e) => {
      // e.keyCode is deprecated: developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode. So I've used e.key === 'Escape' instead, for better international keyboard support. 
      if(e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
},[onClose])

  if (!show) return null;

  const isFilterEmpty= filters.level_id !== "" || filters.tags.length !== 0 || filters.owner_user_id !== "" || filters.language !== "";

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={ onClose }></div>
      <div className={`modal-${cname}`}>
        <div className={`modal-${cname}-header`}>
          <h2 className="modal-title">{ title }</h2>
        </div>
        {/* Clear All filters button */}
        <div className={classes["modal-clear-filter"]}>
          {console.log(filters.owner_user_id !== "")}
          <button onClick={ isFilterEmpty && onClearFilters} 
            className={classes["clear-all-filter-btn"]}>Clear All</button>
        </div>
        <div className={`modal-${cname}-body`}>
          { children }
        </div>
        <div className={`modal-${cname}-footer`}>
          <button className="btn-default-light btn-size--sm" onClick={ onClose }><GoX size="16px" className="icon" /> Close</button>
          { onSubmit && <button className="btn-primary btn-size--sm" onClick={ onSubmit }><GoCheck size="16px" className="icon" /> Apply</button> }
        </div>
     </div>
     </>
    ,document.body);
}

export default Modal;