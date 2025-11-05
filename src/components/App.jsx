import { useState } from 'react';
import '../styles/global.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div class="flex h-screen justify-center items-center">
            <div>
                <h1 class="text-3xl font-bold underline">Welcome</h1>
                <h1>React</h1>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;
