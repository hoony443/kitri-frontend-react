import React, { useState, useRef } from 'react';

function InputSample() { 
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const {name, nickname} = inputs;
    
    const onChange = e => {
        const { value, name } = e.target;
        setInputs(
            {
            ...inputs,
            [name]: value
            }
        );
    }
    const onReset = () => {
        setInputs(
            { 
                name: '',
                nickname: ''
            }
        );
        nameInput.current.focus();
    }
    

    return(
        <div>
            <input ref={nameInput} name="name" value={name} onChange={onChange} placeholder="이름"></input>
            <input name="nickname" value={nickname} onChange={onChange} placeholder="닉네임"></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;