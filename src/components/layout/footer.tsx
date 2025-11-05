import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t backdrop-blur-2xl rounded-2xl border-border/70 p-4 bg-background/20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold text-primary">
            The 1916 Uprising Project
          </h3>
          <p className="text-sm text-muted-foreground">
            Educational web experience about Kazakhstan’s national history.
          </p>
        </div>

        <div className="flex flex-wrap space-x-4 **gap-y-2** justify-center md:justify-start">

          <Link
            to="/timeline"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Timeline
          </Link>
          <Link
            to="/gallery"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Gallery 
          </Link>
          <Link
            to="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>

          <Link
            to="/sources"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            References
          </Link>
                    <a
            href="https://github.com/Whiteksks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

    </footer>
  );
}
