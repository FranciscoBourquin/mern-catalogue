export function FranTechLogo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-xl shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l1.5 0m-6.364 2.636l1.061 1.061M4.5 11.25l0 1.5m2.636 6.364l1.061-1.061M12.75 19.5l-1.5 0m6.364-2.636l-1.061-1.061M19.5 12.75l0-1.5m-2.636-6.364l-1.061 1.061M12 9a3 3 0 100 6 3 3 0 000-6z"
          />
        </svg>
      </div>

      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        FranTech
      </h1>
    </div>
  );
}
