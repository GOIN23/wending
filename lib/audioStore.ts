let playFn: (() => void) | null = null

export const registerPlay = (fn: () => void) => {
  playFn = fn
}

export const triggerPlay = () => {
  playFn?.()
}
