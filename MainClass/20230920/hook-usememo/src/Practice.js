import { useState, useMemo } from 'react'

function calculate() {
    let count = 0
    for (let i = 0; i < 3000000000; i++) {
        count += i
    }
    return count
}

function App() {
    const [count, setCount] = useState(0)
    const result = useMemo(() => {
        return calculate()
    },[]);

    return (
        <div>
            <h1>calculate 결과 : {result}</h1>
            <button onClick={() => {
                setCount(count + 1)
                console.log(count)
            }}>클릭! {count}</button>
        </div >
    );
}
export default App;