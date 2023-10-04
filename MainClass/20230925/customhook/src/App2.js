import React from 'react'
import ImageList from './components/ImageList';
import { useState } from 'react'
import { useEffect } from 'react';
import useScroll from './Hooks/useScroll';
import Loading from './components/Loading';


function App2() {
    let [imageList, setImageList] = useState([]);

    // api에 전달할 페이지 값을 관리
    let [pageToFetch, setPageToFetch] = useState(1);

    // 로딩중인 상태를 관리
    const [isLoading, setIsLoading] = useState(false);
    const isBottom = useScroll();

    useEffect(() => {
        if (isBottom) {
            setPageToFetch((prev) => {
                return prev + 1
            })
        }
    }, [isBottom]);

    async function fetchImage() {
        setIsLoading(true);
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`);

            if (!response.ok) {
                throw new Error('네트워크 에러')
            }

            const data = await response.json();

            setImageList([...imageList, ...data]);
            setIsLoading(false);

        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        fetchImage();
    }, [pageToFetch]);

    return (
        <>
            <ImageList imageList={imageList} />
            {isLoading && <Loading />}                  
        </>
    )
}

export default App2