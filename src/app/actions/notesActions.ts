import { database } from "@/appwrite/appwrite.config"


export async function getNotes(): Promise<Note[]> {
    const res = await database.listDocuments(
        "notes_app",
         "notes"
        )    
    
    const notes: Note[] = res.documents.map(note => ({
        $id: note.$id,
        $createdAt: note.$createdAt,
        content: note.content
    }))
    
    return notes
}