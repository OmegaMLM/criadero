import { getAllBlog } from "@/components/blog/actions/blog-action";
import FormNewBlog from "@/components/blog/components/FormNewBlog";
import InputImage from "@/components/blog/components/InputImage";
import TableBlogs from "@/components/blog/components/TableBlogs";
import { title } from "@/components/primitives";

export default async function BlogPage() {
  const blogs = await getAllBlog();

  console.log(blogs);
  return (
    <div>
      <TableBlogs blogs={blogs} />
    </div>
  );
}
