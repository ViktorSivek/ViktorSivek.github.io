import 'tailwindcss/tailwind.css';

const FullPageLoader = () => {
  return (
    <div style={{backgroundColor: '#120e16'}} className="fixed inset-0 flex flex-col items-center justify-center">
      <img src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" alt="Loading..." className="w-40 h-40 mb-10 rounded-2xl" />
      <div className="w-64 h-1 bg-white rounded-full">
        <div className="h-full bg-red-600 rounded-full animate-slide duration-3000" />
      </div>
    </div>
  );
};

export default FullPageLoader;



