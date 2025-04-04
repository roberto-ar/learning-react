import { useState } from "react";
export const TwiterFollowCard = ({name, username, initialIsFollowing}) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };
    const followText = isFollowing ? 'Siguiendo' : 'Seguir';
    const followClassName = isFollowing ? 'tw-card-follow-btn is-following' : 'tw-card-follow-btn';
    return (
        <article className ="tw-card">
            <header className="tw-card-header">
                <img className="tw-card-pp" src={`https://unavatar.io/github/${username}`} alt="Perfil Photo" />
                <div className="tw-card-header-info">
                <strong >{name}</strong>
                <span className="tw-card-username">@{username}</span>
            </div>
            </header>

            <aside>
                <button onClick={handleClick} className={followClassName}>
                    <span className="tw-card-follow-text">{followText}</span>
                    <span className="tw-card-stop-follow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}