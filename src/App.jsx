import './App.css';
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {    // Componente Padre

    //
    return (
        <section className="App">  { /* Componente Hijo donde le pasamos props del padre */ }
            <TwitterFollowCard userName="NetflixLAT">
                Netflix Latinoamérica
            </TwitterFollowCard>

            <TwitterFollowCard userName="PrimeVideo">
                Prime Video Latinoamérica
            </TwitterFollowCard>

            <TwitterFollowCard userName="DCNewsLatino">
                Disney Plus LATAM
            </TwitterFollowCard>

            <TwitterFollowCard userName="StarPlusLA">
                Star+ Latinoamérica
            </TwitterFollowCard>
        </section>
    )
}
