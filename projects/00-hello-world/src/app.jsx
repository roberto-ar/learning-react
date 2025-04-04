import './app.css';
import {TwiterFollowCard} from './twiterFollowCard.jsx';
const users = [
    {name: 'Roberto Atilano', username: 'roberto-ar', initialIsFollowing: true},
    {name: 'Diego Alvarez', username: 'diegoav', initialIsFollowing: false},
    {name: 'Alexander Muñoz', username: 'alexander', initialIsFollowing: false},
    {name: 'Pedro Arias', username: 'said', initialIsFollowing: false},
    {name: 'Julian Garcia', username: 'juliangarcia', initialIsFollowing: false},
];
export const App = () =>{
    return (
        <section className='App'>
            {users.map(({name, username, initialIsFollowing}) => {
                return (
                    <TwiterFollowCard 
                        key={username} 
                        name={name} 
                        username={username} 
                        initialIsFollowing={initialIsFollowing}
                    />
                )
            })}
        </section>
        
    );
}