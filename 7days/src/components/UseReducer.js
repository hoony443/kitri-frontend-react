import { useReducer } from "react";



function UseReducer() {
  function counter(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state+1
      case "DECREMENT":
        return state-1
      default:
        return state;
    }
  }

  const [number, dispatch] = useReducer(counter, 0);

  const onIncrese =() => {
    dispatch({type: "INCREMENT"})
  }
  const onDecrese = () => { 
    dispatch({type: "DECREMENT"})
  }
console.log(number)
  return(
    <div>
      <button onClick={onIncrese}>INCREMENT</button>
      <button onClick={onDecrese}>DECREMENT</button>
    </div>
  );
}

export default UseReducer;




















// import { useReducer } from "react";

// function UseReducer() {
//   function reducer(state, action) {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//       default:
//         return state;
//     }
//   }
//   // 등록 및 초기값 입력
//   // dispatch는 액션을 발생시키는 함수
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   const onDecrease = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   // 상태가 변하면 리렌더가 되서 잘찍힘
//   console.log(number);
//   return (
//     <div>
//       <button onClick={onIncrease}>INCREMENT</button>
//       <button onClick={onDecrease}>DECREMENT</button>
//     </div>
//   );
// }

// export default UseReducer;
