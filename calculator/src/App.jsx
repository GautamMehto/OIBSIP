import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App w-full h-screen flex flex-col gap-5 items-center justify-center bg-slate-300 bg-[url('https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')] bg-no-repeat bg-cover bg-center">
      <h1 className='text-2xl font-bold text-black'>Simple React Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
