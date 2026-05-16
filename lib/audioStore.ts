let playFn: (() => void) | null = null
let preunlockFn: (() => void) | null = null

export const registerPlay = (fn: () => void) => { playFn = fn }
export const triggerPlay = () => { playFn?.() }

export const registerPreunlock = (fn: () => void) => { preunlockFn = fn }
export const triggerPreunlock = () => { preunlockFn?.() }
