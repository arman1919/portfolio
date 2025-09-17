import { Button } from "../ui/button";

export default function Footer(props: { scrollToSection: (sectionId: string) => void }) {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">2025 Arman Rafayelyan. All rights reserved.</p>
              <p className="text-sm text-muted-foreground">Built with React, Next.js & Tailwind CSS</p>
            </div>

            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => props.scrollToSection("home")}
                className="text-muted-foreground"
              >
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </footer>
    );
}