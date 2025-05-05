import { Home, Users, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white p-5 hidden md:block">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-3 hover:text-blue-400">
          <Home size={20} /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-blue-400">
          <Users size={20} /> Users
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-blue-400">
          <Settings size={20} /> Settings
        </a>
      </nav>
    </aside>
  );
}
