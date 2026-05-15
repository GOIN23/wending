let startFn: (() => void) | null = null

export const registerVideoStart = (fn: () => void) => {
  startFn = fn
}

export const triggerVideoStart = () => {
  startFn?.()
}
