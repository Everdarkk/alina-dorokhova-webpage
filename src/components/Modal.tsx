'use client'

import React from "react"
import { useEffect } from "react"

type ModalProps = {
    isOpen: boolean
    onClose: () => void,
    children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const body = document.body
    
    if (isOpen) {
      body.style.overflow = 'hidden'
      body.style.paddingRight = '0px'
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
    <div className="fixed inset-0 z-50 flex items-center justify center bg-black/50">
            <div className="bg-white rounded-xl shadow-xl p-6 relative w-full max-w-md">
                <button
                    onClick={onClose}
                    >
                    &times;
                </button>

                {children}
            </div>
        </div>
                  
    )
}