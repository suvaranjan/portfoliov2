export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="mb-3 flex space-x-4"></div>
        <div className="mb-8 flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
          <div>Suvaranjan Pradhan</div>

          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}
