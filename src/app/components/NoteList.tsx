'use client'
import { useState } from 'react'
import { deleteNote } from '../actions/notesActions'

export default function NoteList({ initialNotes }: { initialNotes: Note[] }) {
  const [notes, setNotes] = useState<Note[]>(initialNotes)

  const handleDelete = async (noteId: string) => {
    const el = document.getElementById(noteId)

    if(el){
      el.classList.add('crossed-out')
    }

    await deleteNote(noteId)
  }

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.$id} id={note.$id} onClick={() => handleDelete(note.$id)}>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  )
}
