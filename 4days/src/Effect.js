import { useState, useEffect } from 'react';

function Effect() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyweord] = useState('');

    const onClick = () => { setCounter((current => current + 1)) };
    const onChange = (event) => { setKeyweord(event.target.value) };
    console.log("render all the time!")
    // const RenderOnlyOnce = () => { console.log("Only once") };
    useEffect(() => { console.log("Call The API ... ") }, []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log('keyword: ', keyword);
        }
    }, [keyword]);

    return (
        <div>
            <input onChange={onChange} placeholder="Write here!"></input>
            <div>
                <span styles={{ fontSize: "20px" }}>카운트: {counter}</span>
            </div>
            <button onClick={onClick}>count start!</button>
        </div>
    );
}

export default Effect;