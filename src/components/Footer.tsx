import { Link } from "react-router-dom";
import { MoonIcon } from "./MoonIcon";
import { Mail, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-night-sky-deep/60 backdrop-blur-md mt-24">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <MoonIcon size="sm" />
              <span className="text-lg font-serif font-bold text-foreground">Sleep Calculator</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Science-backed sleep tools and education to help you rest better and wake refreshed.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Sleep Calculator</Link></li>
              <li><Link to="/tools" className="text-muted-foreground hover:text-primary">All Tools</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Sleep Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sleep Calculator. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="mailto:hello@sleepcalculator.app" aria-label="Email" className="text-muted-foreground hover:text-primary"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
