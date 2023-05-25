import {useRef, useEffect} from "react";


const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    // console.log(element)
    useEffect(() => {
        if (typeof duration !== 'number' || typeof delay !== 'number'){
            console.log("Not number");
            return;
        }
        if (element.current) {
            console.log(element);
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    },[])
    return {ref: element, style: {opacity: 0}}
}

function FadeIn() {
    const fade1 = useFadeIn(2);
    const fade2 = useFadeIn(2, 2);
    return(
        <div>
            <h1 {...fade1}>Hello</h1>
            <h2 {...fade2}>Hello2</h2>
        </div>
    );
}

export default FadeIn;































// import { useRef, useEffect } from "react";


// const useFadeIn = (duration = 1, delay = 0) => {
//     const element = useRef()
//     useEffect(() => {
//         if (typeof duration !== 'number' || typeof delay !== 'number') {
//             console.log("Not number")
//             return
//         }
//         if (element.current) {
//             console.log(element)
//             const {current} = element
//             current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
//             current.style.opacity = 1
//         }
//     }, [])
//     return {ref : element , style: {opacity : 0}}
// }

// // 항상 최상위에서 랜더링되어야 함. (리액트 규칙) 훅 만들때
// function FadeIn() {
//     const fade1 = useFadeIn(2)
//     const fade2 = useFadeIn(2,4) 
//   return (
//     <div>
//         <h1 {...fade1}>Hello</h1>
//         <h2 {...fade2}>Hello2</h2>
//     </div>
//   );
// }

// export default FadeIn;
