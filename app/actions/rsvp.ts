'use server'

import { pool } from '@/lib/db'

export type RsvpPayload = {
  name: string
  status: string
  alcohol: string[]
  notes: string
}

export async function submitRsvp(data: RsvpPayload) {
  if (!data.name.trim()) throw new Error('Имя обязательно')

  await pool.query(
    `INSERT INTO rsvp (name, status, alcohol, notes) VALUES ($1, $2, $3, $4)`,
    [data.name.trim(), data.status, data.alcohol, data.notes.trim() || null]
  )
}
