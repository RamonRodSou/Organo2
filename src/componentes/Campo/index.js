import './Campo.css'

const Campo = ({ classe, classeInput, label, placeholder, valor, tipo = 'text', aoAlterado, obrigatorio = false }) => {
    return (
//  <div className={`campo campo-${tipo}`}>
    <div className={classe}>
        <label>{label}</label>
        <input className={classeInput} value={valor} type={tipo} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default Campo