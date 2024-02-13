import './App.css'

function App() {

  return (
    <>
      <div className='p-10'>
        <h1 className='text-3xl'>ChatFlix</h1>

        <div className='flex flex-col mt-[5rem] items-center'>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username"
            placeholder='Enter username' 
            minLength={1}
            className='p-2 rounded'
            />
          <h2 className='text-[#ed3d3d]'>Error</h2>
        </div>

        <button >
          Start chatting
        </button>

      </div>
    </>
  )
}

export default App
