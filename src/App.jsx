import './App.css';
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

const users = [
    {
        userName: 'NelsonG40090647',
        name: 'Nelson García',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: false
    },
    {
        userName: 'petrogustavo',
        name: 'Gustavo Petro',
        isFollowing: true
    },
    {
        userName: 'GustavoBolivar',
        name: 'Gustavo Bolivar',
        isFollowing: false
    }
]
export function App() {    // Componente Padre
    return (
        <section className="App">  { /* Componente Hijo donde le pasamos props del padre */ }
            {
                users.map(user => {
                    const { userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}























