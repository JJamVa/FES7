import { useState } from 'react';

function useAxios() {
    const [data, setData] = useState(null);

    async function getData(initLink) {
        try {
            const response = await fetch(initLink);
            const jsonData = await response.json();
            setData(JSON.stringify(jsonData));
        } catch {
            setData(undefined);
        }
        
    }

    return [data, getData];
}

export default useAxios;