

function Reducer (){
  function counterReducer(state, action){
    if (action === "INCREMENT") {
      return state + 1;
    } else if (action === "DECREMENT") {
      return state - 1;
    } else {
      return state;
    }
  }

  let state = 0;
  console.log(state);
  function INCREMENT() {
    state = counterReducer(state, "INCREMENT")
    console.log(state);
  }
  function DECREMENT() {
    state = counterReducer(state, "DECREMENT")
    console.log(state);  
  }

  return(
    <div>
      <button onClick={INCREMENT}>INCREMENT</button>
      <button onClick={DECREMENT}>DECREMENT</button>
    </div>
  );
}

export default Reducer;
































// //액션에 따라 상태 값을 업데이트 하는 것이 state와의 차이점
// function Reducer() {
//   function counterReducer(state, action) {
//     if (action === "INCREMENT") {
//       return state + 1;
//     } else if (action === "DECREMENT") {
//       return state - 1;
//     } else {
//       return state;
//     }
//   }
//   let state = 0; // 초기 상태

//   function INCREMENT() {
//     state = counterReducer(state, "INCREMENT");
//     // 상태가 변해도 리렌더가 되지 않음. 실행 함수 안에서 로그를 찍어야 변경 된 값이 나옴
//     console.log(state);
//   }

//   function DECREMENT() {
//     state = counterReducer(state, "DECREMENT");
//     // 상태가 변해도 리렌더가 되지 않음. 실행 함수 안에서 로그를 찍어야 변경 된 값이 나옴
//     console.log(state);
//   }

//   return (
//     <div>
//       <button onClick={INCREMENT}>INCREMENT</button>
//       <button onClick={DECREMENT}>DECREMENT</button>
//     </div>
//   );
// }

// export default Reducer;
