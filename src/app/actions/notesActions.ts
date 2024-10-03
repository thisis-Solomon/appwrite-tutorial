import { database } from "@/appwrite/appwrite.config"
import { ID } from "appwrite"


const DB_ID = "notes_app"
const COL_ID = "notes"
const _ID = ID.unique()

export async function getNotes(): Promise<Note[]> {
    const res = await database.listDocuments(
        DB_ID,
        COL_ID
        )    
    
    const notes: Note[] = res.documents.map(note => ({
        $id: note.$id,
        $createdAt: note.$createdAt,
        content: note.content
    }))

    return notes
}

export async function createNote(content: string): Promise<Note>{
    const newNote = {content: content}
    const res = await database.createDocument(
        DB_ID,
        COL_ID,
        _ID,
        newNote
    )

    const note:Note = {
        $id: res.$id,
        $createdAt: res.$createdAt,
        content: res.content
    }

    return note
}

export async function deleteNote(noteId: string){
    await database.deleteDocument(
        DB_ID,
        COL_ID,
        noteId
    )
}