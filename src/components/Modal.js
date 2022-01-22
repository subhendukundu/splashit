import React, { useRef } from 'react'
import ReactDom from 'react-dom'

export default function Modal ({ setModalData, modalData }) {
  const modalRef = useRef()
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setModalData(null)
    }
  }

  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="image-container">
          <picture className="image-container-picture">
            <source media="(max-width: 799px)" srcSet={modalData.urls.small} />
            <source
              media="(min-width: 800px)"
              srcSet={modalData.urls.regular}
            />
            <img src={modalData.urls.regular} alt={modalData.alt_description} className="modal-image" />
          </picture>
        </div>
        <button onClick={() => setModalData(null)}>X</button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}
