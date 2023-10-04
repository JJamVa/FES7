import React from "react";
import useAxios from "./Hooks/useAxios";

function Practice() {
    const [linkData, getLinkData] = useAxios();

    return (
        <>
            <button
                onClick={() => getLinkData("https://picsum.photos/v2/list?page=1&limit=6")}
            >
                데이터 가져오기
            </button>
            <div>{linkData}</div>
        </>
    );
}

export default Practice;