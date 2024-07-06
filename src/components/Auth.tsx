import React from 'react'

interface props {
    user?: string
}
const Auth: React.FC<props> = ({user = "user"}) => {
    return (
        <>
        <h1>Bonjour {user} </h1>
            <form>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input type="text" name='name' placeholder='name' />
                </div>
            </form>

        </>
    )
}

export default Auth
