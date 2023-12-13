import React from 'react'
import styles from './styles.module.css'

/**
 * Component displaying a simple modal with the text of your choice.
 * @component
 * @param {boolean} openModal State variable defining if the modal is open or not.
 * @param {function} setOpenModal Set function used in the useState hook.
 * @param {string} text Text to be displayed on the modal.
 * @return A modal component with the choosen text and a close X button.
 */

export const Modal = ({ openModal, setOpenModal, text }) => {
  return (
    <React.Fragment>
      {openModal ? (
        <div className={styles.modal}>
          <p>{text}</p>
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
      ) : null}
    </React.Fragment>
  )
}
