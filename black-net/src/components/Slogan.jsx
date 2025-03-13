import linhasPri from '../assets/images/efeitos/linhasp.png'


import '../styles/styles-components/Slogan.sass'

export default function Slogan(){
    return(

        <section className=" slogan">
            <img src={linhasPri} alt="" />
            <h1>Internet <span >100<span className='porcentagem'>%</span></span> Fibra Òptica!</h1>
            <p>Exclusividade e potência na sua conexão, navegue sem limites!</p>

        </section>
        )}