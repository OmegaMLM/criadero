export interface IBlog {
    id?: string; // opcional al crear, requerido al editar o borrar
    title: string;
    content: string;
    createAt?: Date,
    image: string
}