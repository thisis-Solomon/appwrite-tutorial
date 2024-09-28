import {Client, Databases} from "appwrite"

const client = new Client()

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject('66f852390022c1d94e84')

export const database = new Databases(client)