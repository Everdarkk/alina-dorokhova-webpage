'use client'

import React from "react"
import { useEffect } from "react"
import styles from '../styles/Modal.module.css'

type ModalProps = {
    isOpen: boolean
    onClose: () => void,
    children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const body = document.body
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    
    if (isOpen) {
      body.style.overflowY = 'hidden'
      body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      body.style.overflow = ''
      body.style.paddingRight = ''
    }
    
    return () => {
      body.style.overflow = ''
      body.style.paddingRight = ''
    }
  }, [isOpen])
  
  if (!isOpen) return null
  
  return (
    <div className={`${styles.wrap} ${isOpen ? styles.open : ''}`}>
            <div className={styles.modal}>
                <div className={styles.header}>
                  <p className={styles.title}>
                    Дані для відправки
                  </p>

                  <button
                      onClick={onClose}
                      className={styles.btnClose}
                      >
                      &times;
                  </button>
                </div>

                {children}
            </div>
        </div>
                  
    )
}