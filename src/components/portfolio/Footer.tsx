export const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Fatwa Ratantja Kusumajati. All rights reserved.</p>
      <p>Built with React + Tailwind · Surabaya, Indonesia</p>
    </div>
  </footer>
);
