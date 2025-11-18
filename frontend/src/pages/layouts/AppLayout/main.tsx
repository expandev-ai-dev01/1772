import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md p-4">
        <nav>
          <p className="text-xl font-semibold">BookNest</p>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BookNest. All rights reserved.
      </footer>
    </div>
  );
};
