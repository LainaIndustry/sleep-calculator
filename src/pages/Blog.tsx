import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { AdSlot } from "@/components/AdSlot";
import { SEO } from "@/components/SEO";

const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-gradient-night relative">
      <SEO
        title="Sleep Blog — Guides on Sleep Science & Hygiene"
        description="In-depth, research-backed guides on sleep cycles, sleep debt, napping, shift work, and building better sleep habits."
        path="/blog"
      />
      <StarBackground />
      <Navigation />


      <main className="relative z-10 container mx-auto px-4 py-16">
        <header className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-4">The Journal</div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Sleep, decoded — <span className="italic text-primary">one night at a time</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            In-depth guides from sleep research, written for humans who just want to wake up feeling better.
          </p>
        </header>

        {/* Featured */}
        <Link to={`/blog/${featured.id}`}>
          <Card className="bg-sleep-card border-border hover:border-primary transition-all p-8 md:p-12 mb-12 shadow-elegant grid md:grid-cols-3 gap-8 items-center group">
            <div className="md:col-span-2">
              <div className="text-xs uppercase tracking-widest text-primary mb-3">Featured · {featured.category}</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance">
                {featured.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featured.readTime}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-accent shadow-glow flex items-center justify-center">
                <ArrowRight className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
          </Card>
        </Link>

        {/* AD — between featured and grid */}
        <div className="max-w-4xl mx-auto mb-10">
          <AdSlot slot="4444444444" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="bg-sleep-card border-border hover:border-primary transition-all duration-300 p-7 h-full group">
                <div className="text-xs uppercase tracking-widest text-primary mb-3">{post.category}</div>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-5 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
