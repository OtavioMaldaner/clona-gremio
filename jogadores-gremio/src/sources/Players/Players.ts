// imagens dos jogadores
import Brenno from './images/Brenno.png';
import Fabio from './images/Fábio.png';
import Geromel from './images/Geromel.png';
import Kannemann from './images/Kannemann.png'; 
import Nathan from './images/Nathan.png';
import Carballo from './images/Felipe Carballo.png';
import Suarez from './images/Luís Suárez.png';
import Ferreira from './images/Ferreira.png';
import Vina from './images/Vina.png';
import GabrielGrando from './images/Gabriel Grando.png';
import Galdino from './images/Everton Galdino.png';
import BrunoUvini from './images/Bruno Uvini.png';
import LucasSilva from './images/Lucas Silva.png';
import Gustavinho from './images/Gustavinho.png';
import JoaoPedro from './images/João Pedro.png';
import Cristaldo from './images/Franco Cristaldo.png';
import Villasanti from './images/Mathías Villasanti.png';
import Reinaldo from './images/Reinaldo.png';
import Pepe from './images/Pepê.png';
import JhonataRobert from './images/Jhonata Robert.png';
import DiegoSouza from './images/Diego Souza.png';
import Adriel from './images/Adriel.png';
import BrunoAlves from './images/Bruno Alves.png'; 
import Ronald from './images/Ronald.png';
import Nata from './images/Natã.png';
import Bitello from './images/Bitello.png';
import FelipeScheibig from './images/Felipe Scheibig.png';
import Rubens from './images/Rubens.png';
import Zinho from './images/Zinho.png';
import GustavoMartins from './images/Gustavo Martins.png';
import Cuiabano from './images/Cuiabano.png';
import AndreHenrique from './images/André Henrique.png';

// imagens das nabas
import Thaciano from './imagensNabas/Thaciano.png';
import ThiagoSantos from './imagensNabas/Thiago Santos.png'
import DiogoBarbosa from './imagensNabas/Diogo Barbosa.png';
import Guilherme from './imagensNabas/Guilherme.png';
import RodrigoFerreira from './imagensNabas/Rodrigo Ferreira.png';
import JamintonCampaz from './imagensNabas/Jaminton Campaz.png';
import Janderson from './imagensNabas/Janderson.png';
import Ricardinho from './imagensNabas/Ricardinho.png';
import EliasManoel from './imagensNabas/Elias Manoel.png';
import Sarara from './imagensNabas/Sarará.png';
import Benitez from './imagensNabas/Benítez.png';
import Tonhao from './imagensNabas/Tonhão.png';
import Rildo from './imagensNabas/Rildo.png';
import Orejuela from './imagensNabas/Luís Orejuela.png';
import Churin from './imagensNabas/Diego Churín.png';
import DC from './imagensNabas/Douglas Costa.png';
import Alisson from './imagensNabas/Alisson.png';
import Borja from './imagensNabas/Borja.png';
import PauloMiranda from './imagensNabas/Paulo Miranda.png';
import Everton from './imagensNabas/Everton Cenourinha.png';
import Darlan from './imagensNabas/Darlan.png';
import LeoPereira from './imagensNabas/Léo Pereira.png';
import LuizFernando from './imagensNabas/Luiz Fernando.png';
import Ruan from './imagensNabas/Ruan 70k.png';
import Emanuel from './imagensNabas/Emanuel.png';
import Felipe from './imagensNabas/Felipe Albuquerque.png';
import Kleber from './imagensNabas/Kléber Gladiador.png';
import YuriMamute from './imagensNabas/Yuri Mamute.png';
import FacundoBertoglio from './imagensNabas/Facundo Bertoglio.png';
import Werley from './imagensNabas/Werley.png';
import Miralles from './imagensNabas/Miralles.png';
import Marquinhos from './imagensNabas/Marquinhos.png';
import Saimon from './imagensNabas/Saimon.png';
import Cris from './imagensNabas/Cris.png';
import Wellinton from './imagensNabas/Wellinton.png';
import Para from './imagensNabas/Pará.png';
import AndreSantos from './imagensNabas/André Santos.png';
import MaxiRodrigues from './imagensNabas/Maxi Rodrigues.png';
import Adriano from './imagensNabas/Adriano Pagode.png';
import LucasCoelho from './imagensNabas/Lucas Coelho.png';
import Bobo from './imagensNabas/Bobô.png';
import Fred from './imagensNabas/Fred.png';
import Negueba from './imagensNabas/Negueba.png';

export type Jogador = {
    name: string,
    position: string,
    image: string,
}
export const Jogadores: Jogador[] = [{
    name: "Brenno",
    position: "goleiro",
    image: Brenno,
}, {
    name: "Fábio",
    position: "lateral direito",
    image: Fabio,
}, {
    name: "Geromel",
    position: "zagueiro",
    image: Geromel,
}, {
    name: "Kannemann",
    position: "zagueiro",
    image: Kannemann,
}, {
    name: "Nathan",
    position: "meia",
    image: Nathan,
}, {
    name: "Felipe Carballo",
    position: "meio campo",
    image: Carballo,
}, {
    name: "Luís Suárez",
    position: "atacante",
    image: Suarez,
}, {
    name: "Ferreira",
    position: "atacante",
    image: Ferreira,
}, {
    name: "Vina",
    position: "meia atacante",
    image: Vina,
}, {
    name: "Gabriel Grando",
    position: "goleiro",
    image: GabrielGrando,
}, {
    name: "Everton Galdino",
    position: "meia",
    image: Galdino,
},{
    name: "Bruno Uvini",
    position: "zagueiro",
    image: BrunoUvini,
}, {
    name: "Lucas Silva",
    position: "volante",
    image: LucasSilva,
}, {
    name: "Gustavinho",
    position: "atacante",
    image: Gustavinho,
}, {
    name: "João Pedro",
    position: "lateral direito",
    image: JoaoPedro,
}, {
    name: "Franco Cristaldo",
    position: "meia atacante",
    image: Cristaldo,
}, {
    name: "Mathías Villasanti",
    position: "volante",
    image: Villasanti
}, {
    name: "Reinaldo",
    position: "lateral esquerdo",
    image: Reinaldo,
}, {
    name: "Pepê",
    position: "meio campo",
    image: Pepe,
}, {
    name: "Jhonata Robert",
    position: "atacante",
    image: JhonataRobert,
},{
    name: "Diego Souza",
    position: "atacante",
    image: DiegoSouza,
}, {
    name: "Adriel",
    position: "goleiro",
    image: Adriel,
}, {
    name: "Bruno Alves",
    position: "zagueiro",
    image: BrunoAlves,
}, {
    name: "Ronald",
    position: "volante",
    image: Ronald,
}, {
    name: "Natã",
    position: "zagueiro",
    image: Nata,
}, {
    name: "Bitello",
    position: "meia",
    image: Bitello,
}, {
    name: "Felipe Scheibig",
    position: "goleiro",
    image: FelipeScheibig,
}, {
    name: "Rubens",
    position: "atacante",
    image: Rubens,
}, {
    name: "Zinho",
    position: "atacante",
    image: Zinho,
}, {
    name: "Gustavo Martins",
    position: "zagueiro",
    image: GustavoMartins,
}, {
    name: "Cuiabano",
    position: "lateral esquerdo",
    image: Cuiabano,
}, {
    name: "André Henrique",
    position: "atacante",
    image: AndreHenrique
}]




export const Nabas: Jogador[] = [{
    name: "Thiago Santos",
    position: "volante",
    image: ThiagoSantos,
}, {
    name: "Thaciano",
    position: "versátil",
    image: Thaciano,
}, {
    name: "Diogo Barbosa",
    position: "lateral esquerdo",
    image: DiogoBarbosa,
}, {
    name: "Guilherme",
    position: "atacante",
    image: Guilherme,
}, {
    name: "Rodrigo Ferreira",
    position: "lateral direito",
    image: RodrigoFerreira,
}, {
    name: "Jaminton Campaz",
    position: "meia",
    image: JamintonCampaz,
}, {
    name: "Janderson",
    position: "atacante",
    image: Janderson,
}, {
    name: "Ricardinho",
    position: "atacante",
    image: Ricardinho,
}, {
    name: "Elias Manoel",
    position: "atacante",
    image: EliasManoel,
}, {
    name: "Sarará",
    position: "meio campo",
    image: Sarara,
}, {
    name: "Martín Benítez",
    position: "meia",
    image: Benitez,
}, {
    name: "Tonhão (Rodrigues)",
    position: "zagueiro / lateral direito",
    image: Tonhao,
}, {
    name: "Rildo",
    position: "atacante",
    image: Rildo,
}, {
    name: "Luís Orejuela (Panita)",
    position: "lateral direito",
    image: Orejuela,
}, {
    name: "Diego Churín",
    position: "atacante",
    image: Churin,
}, {
    name: "Douglas Costa",
    position: "atacante",
    image: DC,
}, {
    name: "Alisson",
    position: "versátil",
    image: Alisson,
}, {
    name: "Miguel Borja",
    position: "atacante",
    image: Borja,
}, {
    name: "Paulo Miranda",
    position: "zagueiro",
    image: PauloMiranda,
}, {
    name: "Everton Cenourinha",
    position: "atacante",
    image: Everton,
}, {
    name: "Darlan",
    position: "meio campo",
    image: Darlan,
}, {
    name: "Léo Pereira",
    position: "atacante",
    image: LeoPereira,
}, {
    name: "Luíz Fernando",
    position: "atacante",
    image: LuizFernando,
}, {
    name: "Ruan 70k",
    position: "zagueiro",
    image: Ruan,
}, {
    name: "Emanuel",
    position: "zagueiro",
    image: Emanuel,
}, {
    name: "Felipe Albuquerque",
    position: "lateral direito",
    image: Felipe,
},{
    name: "Negueba",
    position: "atacante",
    image: Negueba
}, {
    name: "Fred",
    position: "zagueiro",
    image: Fred
}, {
    name: "Bobô",
    position: "atacante",
    image: Bobo
}, {
    name: "Lucas Coelho",
    position: "atacante",
    image: LucasCoelho
}, {
    name: "Marquinhos",
    position: "meia atacante",
    image: Marquinhos
}, {
    name: "Adriano Pagode",
    position: "volante",
    image: Adriano
}, {
    name: "Saimon",
    position: "zagueiro",
    image: Saimon
}, {
    name: "Cris",
    position: "zagueiro",
    image: Cris
}, {
    name: "Wellinton",
    position: "atacante",
    image: Wellinton
}, {
    name: "Pará",
    position: "lateral direito",
    image: Para
}, {
    name: "André Santos",
    position: "atacante",
    image: AndreSantos
}, {
    name: "Maxi Rodrigues",
    position: "meio campo",
    image: MaxiRodrigues
}, {
    name: "Miralles",
    position: "atacante",
    image: Miralles
}, {
    name: "Werley",
    position: "zagueiro",
    image: Werley 
}, {
    name: "Facundo Bertoglio",
    position: "atacante",
    image: FacundoBertoglio
}, {
    name: "Yuri Mamute",
    position: "atacante",
    image: YuriMamute
}, {
    name: "Kléber Gladiador",
    position: "atacante",
    image: Kleber
}]