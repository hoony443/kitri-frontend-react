import { useState } from "react";


const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {
            target : {value}
        } = event;
        let willUpdate = true;
        if(typeof validator == 'function') {
            willUpdate = validator(value)
        }
        if (willUpdate) {
            setValue(value)
        }
    }
    return {value, onChange};
}
 


function Input() {
    const note = (value) => !value.includes("@");
    const name = useInput("Mr.", note); 
    return(
        <div>
            <h1>useInput!!</h1>
            <input type="text" placeholder="Name..." {...name} />
        </div>
    );
}


export default Input;



























// import { useState } from "react";

// const useInput = (initialValue, validator) => {
//     const [value, setValue] = useState(initialValue)
//     const onChange = event => {
//         const {
//             target : {value}
//         } = event
//         let willUpdate = true
//         if (typeof validator == 'function') {
//             willUpdate = validator(value)
//         }
//         if (willUpdate) {
//             setValue(value)
//         }
//     }
//     return {value , onChange}
// }

// function Input() {
//     const noAt = (value) => !value.includes("@")
//     const name = useInput("Mr.",noAt)
//   return (
//     <div>
//         <h1>Hello</h1>
//         <input type="text" placeholder="Name" {...name} />
//     </div>
//   );
// }

// export default Input;
