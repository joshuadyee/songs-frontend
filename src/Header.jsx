export function Header() {
  return (
    <header>
      <nav className="bg-gray-700 text-gray-300">
        <a className="rounded-md p-1 hover:bg-gray-600 hover:text-white" href="/">Home</a> || 
        <a className="rounded-md p-1 hover:bg-gray-600 hover:text-white" href="/songs/index">Songs</a> || 
        <a className="rounded-md p-1 hover:bg-gray-600 hover:text-white" href="/songs/new">Add New Song</a> ||
      </nav>
    </header>
  )
}