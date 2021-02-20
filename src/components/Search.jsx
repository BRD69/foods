import React, {useState} from 'react';

function Search(props) {
    const {callback = Function.prototype} = props;
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = () =>{
        callback(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    name=""
                    id="search-fild"
                    placeholder="поиск"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button className="btn btn-search-app" onClick={handleSubmit}>Поиск</button>
            </div>
        </div>
    )
}

export {Search}