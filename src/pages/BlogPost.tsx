import { useParams, Link, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import { AdSlot } from "@/components/AdSlot";
import { SEO } from "@/components/SEO";
import { useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id || "1", 10);
  const post = getBlogPost(postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.id !== postId && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-night relative">
      <SEO
        title={`${post.title} | Sleep Calculator`}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          articleSection: post.category,
          author: { "@type": "Organization", name: "Sleep Calculator" },
          publisher: { "@type": "Organization", name: "Sleep Calculator" },
          mainEntityOfPage: `https://sleep-buddy-clone.lovable.app/blog/${post.id}`,
        }}
      />
      <StarBackground />
      <Navigation />


      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 text-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>

          <article className="bg-sleep-card/80 backdrop-blur border border-border rounded-2xl p-8 md:p-14 shadow-elegant">
            <header className="mb-10 pb-8 border-b border-border/50">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{post.category}</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
                {post.title}
              </h1>
              <div className="flex items-center gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime} read</span>
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-foreground prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground prose-a:text-primary
              [&_.lead]:text-xl [&_.lead]:text-foreground/90 [&_.lead]:font-medium [&_.lead]:leading-relaxed [&_.lead]:mb-8"
              dangerouslySetInnerHTML={{ __html: post.intro + post.body }}
            />
          </article>

          {/* AD — after article */}
          <div className="mt-10">
            <AdSlot slot="3333333333" />
          </div>


          {related.length > 0 && (
            <section className="mt-16">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Keep reading</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link key={r.id} to={`/blog/${r.id}`}>
                    <Card className="bg-sleep-card border-border hover:border-primary transition-all p-5 h-full group">
                      <h4 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                        {r.title}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-primary mt-4">
                        Read <ArrowRight className="h-3 w-3" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
