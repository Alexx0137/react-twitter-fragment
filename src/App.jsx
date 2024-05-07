import './App.css';
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {

    return (
        <section className="App">
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