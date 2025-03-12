"use client"

import type React from "react"

// Shadcn UI Toast Component
import { useState, createContext, useContext } from "react"

type ToastProps = {
  title?: string
  description?: string
  duration?: number
}

type ToastContextType = {
  toast: (props: ToastProps) => void
  toasts: (ToastProps & { id: string })[]
  dismissToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType>({
  toast: () => {},
  toasts: [],
  dismissToast: () => {},
})

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const toast = (props: ToastProps) => {
  const { toast: addToast } = useToast()
  addToast(props)
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([])

  const toast = (props: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...props, id }])
  }

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

//   return <ToastContext.Provider value={{ toast, toasts, dismissToast }}>{children}</ToastContext.Provider>
}

