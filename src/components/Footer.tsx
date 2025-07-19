export function Footer() {
  return (
    <footer className="border-t py-6 px-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
