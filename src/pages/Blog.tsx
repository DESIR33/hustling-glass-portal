import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of web development and start building your first website today.",
    category: "Development",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    imageUrl: "/lovable-uploads/3dd62c90-a12b-4007-8e3c-bd2bead7e2eb.png"
  },
  {
    id: 2,
    title: "The Future of AI in Technology",
    excerpt: "Explore how artificial intelligence is shaping the future of technology and its impact on our daily lives.",
    category: "Technology",
    date: "Mar 14, 2024",
    readTime: "8 min read",
    imageUrl: "/lovable-uploads/5e459309-a7d0-44fb-ad17-f35aa5c3012f.png"
  },
  {
    id: 3,
    title: "Best Practices for Modern UI Design",
    excerpt: "Discover the latest trends and best practices in modern user interface design.",
    category: "Design",
    date: "Mar 13, 2024",
    readTime: "6 min read",
    imageUrl: "/lovable-uploads/7407e0c4-d627-4dcd-9e8e-c357a3c987d4.png"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Our Latest Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest news, tutorials, and insights from our team of experts.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-12 glass glass-hover"
          />
          <Search className="absolute left-4 top-3 h-4 w-4 text-muted-foreground" />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {["All", "Development", "Technology", "Design", "Tutorial"].map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="glass glass-hover group animate-in">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge className="mb-4">{post.category}</Badge>
                <CardTitle className="mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;