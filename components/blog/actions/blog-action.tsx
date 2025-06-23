'use server'

import { revalidatePath } from "next/cache"
import { IBlog } from "../interfaces/blog-data"
import { PrismaClient } from "@/lib/prisma/generated/prisma/client"


const prisma = new PrismaClient()

// ✅ Obtener todos los blogs
export const getAllBlog = async () => {
  const blogs = await prisma.blog.findMany({})
  return blogs
}

// ✅ Crear un nuevo blog
export const createBlog = async (blog: IBlog) => {
  
  await prisma.blog.create({
    data: {
      title : blog.title,
      content: blog.content,
      image: blog.image
    },
  })
  revalidatePath("/blog")
}

// ✅ Actualizar un blog existente
export const updateBlog = async (body: IBlog) => {
  const {id, title, content, image} = body;

  await prisma.blog.update({
    where: { id },
    data: {
      title,
      content,
      image
    },
  })

  revalidatePath("/blog")
 
}

// ✅ Eliminar un blog por ID
export const deleteBlog = async (id: string) => {
  if (!id) {
    throw new Error("ID requerido.")
  }

  await prisma.blog.delete({
    where: { id },
  })

  revalidatePath("/blog")
}