import React from 'react'
import HOCLoading from './HOCLoading';

const List = (props) => {
    const { repos } = props;
    if (!repos) return null;
    if (!repos.length) return <p>No Repos, Sorry</p>;
    return (
        <div>
            <ul>
                {
                    repos.map((repo, i) => <li kye={i}> {repo.id} {repo.name}</li>)
                }
            </ul>
        </div>
    )
}

export default HOCLoading(List)
