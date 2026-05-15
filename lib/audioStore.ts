let playFn: (() => void) | null = null
let pauseForVideoFn: (() => void) | null = null
let resumeAfterVideoFn: (() => void) | null = null

export const registerPlay = (fn: () => void) => {
  playFn = fn
}

export const triggerPlay = () => {
  playFn?.()
}

export const registerVideoControls = (pause: () => void, resume: () => void) => {
  pauseForVideoFn = pause
  resumeAfterVideoFn = resume
}

export const pauseMusicForVideo = () => pauseForVideoFn?.()
export const resumeMusicAfterVideo = () => resumeAfterVideoFn?.()
