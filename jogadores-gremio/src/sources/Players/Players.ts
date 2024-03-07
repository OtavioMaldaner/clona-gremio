// imagens dos jogadores
import AndreHenrique from './images/André Henrique.webp';
import BrunoUvini from './images/Bruno Uvini.webp';
import Cuiabano from './images/Cuiabano.webp';
import DiegoCosta from './images/Diego-Costa.webp';
import Dodi from './images/Dodi.webp';
import Galdino from './images/Everton Galdino.webp';
import Carballo from './images/Felipe Carballo.webp';
import FelipeScheibig from './images/Felipe Scheibig.webp';
import Cristaldo from './images/Franco Cristaldo.webp';
import Freddy from './images/Freddy.webp';
import Fabio from './images/Fábio.webp';
import GabrielGrando from './images/Gabriel Grando.webp';
import Geromel from './images/Geromel.webp';
import GustavoMartins from './images/Gustavo Martins.webp';
import JP from './images/JP Galvão.webp';
import JhonataRobert from './images/Jhonata Robert.webp';
import JoaoPedro from './images/João Pedro.webp';
import Kannemann from './images/Kannemann.webp';
import Besozzi from './images/Lucas Besozzi.webp';
import Marchesin from './images/Marchesin.webp';
import Villasanti from './images/Mathías Villasanti.webp';
import Mayk from './images/Mayk.webp';
import Milla from './images/Milla.webp';
import Nathan from './images/Nathan.webp';
import Nata from './images/Natã.webp';
import Pavon from './images/Pavon.webp';
import Pepe from './images/Pepê.webp';
import Reinaldo from './images/Reinaldo.webp';
import RodrigoEly from './images/Rodrigo Ely.webp';
import Ronald from './images/Ronald.webp';
import Rubens from './images/Rubens.webp';
import Soteldo from './images/Soteldo.webp';

// imagens das nabas
import Adriano from './imagensNabas/Adriano Pagode.webp';
import Alisson from './imagensNabas/Alisson.webp';
import AndreSantos from './imagensNabas/André Santos.webp';
import Benitez from './imagensNabas/Benítez.webp';
import Bobo from './imagensNabas/Bobô.webp';
import Borja from './imagensNabas/Borja.webp';
import Cris from './imagensNabas/Cris.webp';
import Darlan from './imagensNabas/Darlan.webp';
import DavidBraz from './imagensNabas/David Braz.webp';
import Churin from './imagensNabas/Diego Churín.webp';
import DiogoBarbosa from './imagensNabas/Diogo Barbosa.webp';
import DC from './imagensNabas/Douglas Costa.webp';
import EliasManoel from './imagensNabas/Elias Manoel.webp';
import Emanuel from './imagensNabas/Emanuel.webp';
import Everton from './imagensNabas/Everton Cenourinha.webp';
import FacundoBertoglio from './imagensNabas/Facundo Bertoglio.webp';
import Felipe from './imagensNabas/Felipe Albuquerque.webp';
import Fred from './imagensNabas/Fred.webp';
import Guilherme from './imagensNabas/Guilherme.webp';
import JamintonCampaz from './imagensNabas/Jaminton Campaz.webp';
import Janderson from './imagensNabas/Janderson.webp';
import Kleber from './imagensNabas/Kléber Gladiador.webp';
import LucasCoelho from './imagensNabas/Lucas Coelho.webp';
import LucasSilva from './imagensNabas/Lucas Silva.webp';
import LuizFernando from './imagensNabas/Luiz Fernando.webp';
import Orejuela from './imagensNabas/Luís Orejuela.webp';
import LeoPereira from './imagensNabas/Léo Pereira.webp';
import Marquinhos from './imagensNabas/Marquinhos.webp';
import MaxiRodrigues from './imagensNabas/Maxi Rodrigues.webp';
import Miralles from './imagensNabas/Miralles.webp';
import Negueba from './imagensNabas/Negueba.webp';
import Para from './imagensNabas/Pará.webp';
import PauloMiranda from './imagensNabas/Paulo Miranda.webp';
import Ricardinho from './imagensNabas/Ricardinho.webp';
import Rildo from './imagensNabas/Rildo.webp';
import RodrigoFerreira from './imagensNabas/Rodrigo Ferreira.webp';
import Ruan from './imagensNabas/Ruan 70k.webp';
import Saimon from './imagensNabas/Saimon.webp';
import Sarara from './imagensNabas/Sarará.webp';
import Thaciano from './imagensNabas/Thaciano.webp';
import ThiagoSantos from './imagensNabas/Thiago Santos.webp';
import Tonhao from './imagensNabas/Tonhão.webp';
import VictorFerraz from './imagensNabas/Victor Ferraz.webp';
import Wellinton from './imagensNabas/Wellinton.webp';
import Werley from './imagensNabas/Werley.webp';
import YuriMamute from './imagensNabas/Yuri Mamute.webp';

export type Jogador = {
    name: string,
    position: string,
    image: string,
}
export const Jogadores: Jogador[] = [
{
    name: "Agustín Marchesín",
    position: "goleiro",
    image: Marchesin,
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
    name: "Rodrigo ELy",
    position: "zagueiro",
    image: RodrigoEly,
}, {
    name: "Reinaldo",
    position: "lateral esquerdo",
    image: Reinaldo,
},
  {
    name: "Soteldo",
    position: "meia",
    image: Soteldo,
},
{
    name: "Felipe Carballo",
    position: "meio campo",
    image: Carballo,
}, {
    name: "Franco Cristaldo",
    position: "meia atacante",
    image: Cristaldo,
},
{
    name: "João Pedro",
    position: "atacante",
    image: JP,
}, {
    name: "Gabriel Grando",
    position: "goleiro",
    image: GabrielGrando,
}, {
    name: "Everton Galdino",
    position: "meia",
    image: Galdino,
}, {
    name: "Nathan",
    position: "meia",
    image: Nathan,
}, {
    name: "Bruno Uvini",
    position: "zagueiro",
    image: BrunoUvini,
},
 {
    name: "Dodi",
    position: "meio campo",
    image: Dodi,
}, 
{
    name: "João Pedro",
    position: "lateral direito",
    image: JoaoPedro,
}, {
    name: "Diego Costa",
    position: "atacante",
    image: DiegoCosta,
},  {
    name: "Mathías Villasanti",
    position: "volante",
    image: Villasanti
}, {
    name: "Cristian Pavón",
    position: "atacate",
    image: Pavon
},
{
    name: "Lucas Besozzi",
    position: "atacante",
    image: Besozzi,
},  {
    name: "Pepê",
    position: "meio campo",
    image: Pepe,
}, {
    name: "Jhonata Robert",
    position: "atacante",
    image: JhonataRobert,
},
, {
    name: "Mayk",
    position: "lateral esquerdo",
    image: Mayk,
},
// , {
//     name: "Bruno Alves",
//     position: "zagueiro",
//     image: BrunoAlves,
// }, 
{
    name: "Ronald",
    position: "volante",
    image: Ronald,
}, {
    name: "Natã",
    position: "zagueiro",
    image: Nata,
},
//  {
//     name: "Bitello",
//     position: "meia",
//     image: Bitello,
// }, 
{
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
},
//  {
//     name: "Zinho",
//     position: "atacante",
//     image: Zinho,
// }, 
{
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