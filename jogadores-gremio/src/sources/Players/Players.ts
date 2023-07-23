// imagens dos jogadores
import Brenno from './images/Brenno.webp';
import Fabio from './images/Fábio.webp';
import Geromel from './images/Geromel.webp';
import Kannemann from './images/Kannemann.webp'; 
import Nathan from './images/Nathan.webp';
import Carballo from './images/Felipe Carballo.webp';
import Suarez from './images/Luís Suárez.webp';
import Ferreira from './images/Ferreira.webp';
import Iturbe from './images/Iturbe.webp';
import GabrielGrando from './images/Gabriel Grando.webp';
import Galdino from './images/Everton Galdino.webp';
import BrunoUvini from './images/Bruno Uvini.webp';
import Gustavinho from './images/Gustavinho.webp';
import JoaoPedro from './images/João Pedro.webp';
import Cristaldo from './images/Franco Cristaldo.webp';
import Villasanti from './images/Mathías Villasanti.webp';
import Reinaldo from './images/Reinaldo.webp';
import Pepe from './images/Pepê.webp';
import JhonataRobert from './images/Jhonata Robert.webp';
// import Adriel from './images/Adriel.webp';
import BrunoAlves from './images/Bruno Alves.webp'; 
import Ronald from './images/Ronald.webp';
import Nata from './images/Natã.webp';
import Bitello from './images/Bitello.webp';
import FelipeScheibig from './images/Felipe Scheibig.webp';
import Milla from './images/Milla.webp';
import Rubens from './images/Rubens.webp';
import Zinho from './images/Zinho.webp';
import GustavoMartins from './images/Gustavo Martins.webp';
import Cuiabano from './images/Cuiabano.webp';
import Freddy from './images/Freddy.webp';
import AndreHenrique from './images/André Henrique.webp';

// imagens das nabas
import Thaciano from './imagensNabas/Thaciano.webp';
import LucasSilva from './imagensNabas/Lucas Silva.webp';
import ThiagoSantos from './imagensNabas/Thiago Santos.webp'
import DiogoBarbosa from './imagensNabas/Diogo Barbosa.webp';
import Guilherme from './imagensNabas/Guilherme.webp';
import RodrigoFerreira from './imagensNabas/Rodrigo Ferreira.webp';
import JamintonCampaz from './imagensNabas/Jaminton Campaz.webp';
import Janderson from './imagensNabas/Janderson.webp';
import Ricardinho from './imagensNabas/Ricardinho.webp';
import EliasManoel from './imagensNabas/Elias Manoel.webp';
import Sarara from './imagensNabas/Sarará.webp';
import Benitez from './imagensNabas/Benítez.webp';
import Tonhao from './imagensNabas/Tonhão.webp';
import Rildo from './imagensNabas/Rildo.webp';
import Orejuela from './imagensNabas/Luís Orejuela.webp';
import Churin from './imagensNabas/Diego Churín.webp';
import DC from './imagensNabas/Douglas Costa.webp';
import Alisson from './imagensNabas/Alisson.webp';
import Borja from './imagensNabas/Borja.webp';
import PauloMiranda from './imagensNabas/Paulo Miranda.webp';
import Everton from './imagensNabas/Everton Cenourinha.webp';
import Darlan from './imagensNabas/Darlan.webp';
import LeoPereira from './imagensNabas/Léo Pereira.webp';
import LuizFernando from './imagensNabas/Luiz Fernando.webp';
import Ruan from './imagensNabas/Ruan 70k.webp';
import Emanuel from './imagensNabas/Emanuel.webp';
import Felipe from './imagensNabas/Felipe Albuquerque.webp';
import DavidBraz from './imagensNabas/David Braz.webp';
import VictorFerraz from './imagensNabas/Victor Ferraz.webp';
import Kleber from './imagensNabas/Kléber Gladiador.webp';
import YuriMamute from './imagensNabas/Yuri Mamute.webp';
import FacundoBertoglio from './imagensNabas/Facundo Bertoglio.webp';
import Werley from './imagensNabas/Werley.webp';
import Miralles from './imagensNabas/Miralles.webp';
import Marquinhos from './imagensNabas/Marquinhos.webp';
import Saimon from './imagensNabas/Saimon.webp';
import Cris from './imagensNabas/Cris.webp';
import Wellinton from './imagensNabas/Wellinton.webp';
import Para from './imagensNabas/Pará.webp';
import AndreSantos from './imagensNabas/André Santos.webp';
import MaxiRodrigues from './imagensNabas/Maxi Rodrigues.webp';
import Adriano from './imagensNabas/Adriano Pagode.webp';
import LucasCoelho from './imagensNabas/Lucas Coelho.webp';
import Bobo from './imagensNabas/Bobô.webp';
import Fred from './imagensNabas/Fred.webp';
import Negueba from './imagensNabas/Negueba.webp';

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
    name: "Iturbe",
    position: "atacante",
    image: Iturbe,
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
}
// , {
//     name: "Adriel",
//     position: "goleiro",
//     image: Adriel,
// }
, {
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
    name: "Milla",
    position: "meio campo",
    image: Milla,
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
    name: "Freddy Noguera",
    position: "atacante",
    image: Freddy,
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
    name: "Lucas Silva",
    position: "volante",
    image: LucasSilva,
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
}, {
    name: "David Braz",
    position: "zagueiro",
    image: DavidBraz,
}, {
    name: "Victor Ferraz",
    position: "lateral direito",
    image: VictorFerraz,
}, {
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