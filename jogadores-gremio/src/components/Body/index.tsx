import './style.scss'
import { useState } from 'react';
import { Jogadores } from '../../sources/Players/Players';
import ProjectDescription from '../ProjectDescription';
const Body = () => {
    type Props = {
        number: string;
        cvc: string;
        date: string;
    }
    type PlayerProps = {
        name: string,
        position: string,
        image: string,
    }
    const [creditCard, setCreditCard] = useState<Props>({
        number: '',
        cvc: '',
        date: ''
    });
    const [toShow, setToShow] = useState<boolean>(false);
    const [player, setPlayer] = useState<PlayerProps>({
        name: '',
        position: '',
        image:''
    });
    const points = (creditCard: string) => {
        creditCard = creditCard.replace(/[^0-9]/g, '');
    let out = '';
    let valids = 0;//número de caracteres válidos até o momento.
    for(let i = 0; valids < 19 && i < creditCard.length; i++){
        let caract = creditCard[i];
        switch(valids){
            case 4:
            case 9:
            case 14:
                //adicionar ponto
                if(caract != '.') caract = `.${caract}`;
                valids += 2;
                break;
            default:
                valids += 1;
                break;
        }
        out = `${out}${caract}`;
    }
    return out;
    }
    const result = () => {
        /*A conta criada é para gerar um resultado bem aleatório, mas de modo que caso a pessoa insira os mesmos dados o resultado seja o mesmo.
        A função consiste em dividir os números do cartão em quatro unidades e somar todas elas. Após isto, serão somados os números finais do ano
        de vencimento do cartão e dividir a soma total pelo código de segurança. Para não haver tanta repetição de resultados, multiplicaremos o resultado por 1000,
        e pegar o resto da divisão pelo tamanho do array de objetos jogadores.*/
        setToShow(true);
        let creditCardNumber = creditCard.number.split(".");
        let sumCreditCard = Number(creditCardNumber[0]) + Number(creditCardNumber[1]) + Number(creditCardNumber[2]) + Number(creditCardNumber[3]);
        let date = Number(creditCard.date.substring(creditCard.date.length - 2));
        let sum = sumCreditCard + date;
        let divide = sum / Number(creditCard.cvc);
        let multiply = divide * 1000;
        let rest = Math.round(multiply % Jogadores.length);
        setPlayer({
            name: Jogadores[rest].name,
            position: Jogadores[rest].position,
            image: Jogadores[rest].image,
        })
        // alert(`Você é o ${Jogadores[rest].position} ${Jogadores[rest].name}`);
        setCreditCard({
            number: '',
            cvc: '',
            date: ''
        });
    }
    return(
        <div className="container">
            <div className='all'>
                <div className="body">
                    <div className="body-title">
                        <h1>Dados do cartão:</h1>
                    </div>
                    <input type="text" id="name" value={creditCard.number} required placeholder="Número do cartão..." onChange={(e)=> {
                        setCreditCard({
                            ...creditCard, 
                            number: points(e.target.value)
                        })
                    }}></input>
                    <input type="text" id="number" value={creditCard.cvc} required maxLength={3} placeholder="Os três números atrás..." onChange={(e)=> {
                        setCreditCard({
                            ...creditCard, 
                            cvc: e.target.value
                        })
                    }}></input>
                    <input type="month" value={creditCard.date} id="date" onChange={(e)=> {
                        setCreditCard({
                            ...creditCard, 
                            date: e.target.value
                        })
                    }}></input>
                    <div>
                        <button className="button" onClick={result}>Resultado</button>
                    </div>
                </div>
                <div className={!toShow ? 'description' : ''}>
                    {!toShow &&
                        <ProjectDescription />
                    }
                    {toShow &&
                        <section className='mainPlayerPart'>
                            <h2>Segundo os nossos cálculos, você é o {player.position} {player.name}</h2>
                            <img className='playerImage' src={player.image} alt={player.name} />
                            <p>DESCRÇÃO</p>
                        </section>
                    }
                </div>
            </div>
        </div>
    );
}
export default Body;