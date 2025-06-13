import "./_Formgroup.scss";

export default function Formgroup({text, placeholder, type}) {
    return (
        <div className="formgroup">
            <label htmlFor={text}></label>
            <input type={type} name={text} id={text} placeholder={placeholder} />
        </div>

    )
}