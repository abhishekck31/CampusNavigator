// Shadcn UI Toaster Component
"use client"

import { useToast } from "./use-toast"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed top-0 right-0 z-50 p-4 w-full sm:max-w-[420px] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onDismiss={() => dismiss(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function Toast({
  toast,
  onDismiss,
}: {
  toast: { id: string; title?: string; description?: React.ReactNode; duration?: number }
  onDismiss: () => void
}) {

  const [timeLeft, setTimeLeft] = useState(toast.duration || 5000)

  useEffect(() => {
    if (timeLeft <= 0) {
      onDismiss()
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 100)
    }, 100)

    return () => clearTimeout(timer)
  }, [timeLeft, onDismiss])

  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss()
    }, toast.duration || 5000)

    return () => clearTimeout(timer)
  }, [onDismiss, toast.duration])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="glass-card p-4 rounded-lg shadow-lg border border-gray-800 relative overflow-hidden"
    >
      <div className="flex justify-between items-start">
        <div>
          {toast.title && <h3 className="font-semibold text-white">{toast.title}</h3>}
          {toast.description && <p className="text-sm text-gray-300 mt-1">{toast.description}</p>}
        </div>
        <button onClick={onDismiss} className="text-gray-400 hover:text-white transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1 bg-primary"
        style={{ width: `${(timeLeft / (toast.duration || 5000)) * 100}%` }}
      />
    </motion.div>
  )
}
