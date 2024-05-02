import React from 'react'
import Header from '../../components/Header/Header'
import Photoblock from '../../components/PhotoBlock/Photoblock'
import LogIn from '../../components/LogIn/LogIn'

const LoginPage = () => {
  return (
    <>
        <Header />
        <main>
            <Photoblock/>
            <div>
                <LogIn/>
            </div>
        </main>
    </>
  )
}

export default LoginPage