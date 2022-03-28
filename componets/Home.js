import React from 'react'

function Home({navigation}) {
  return (
    <>
      <div
      >Home</div>
      <div
        onClick={() => navigation.navigate('One')}
      >One</div>
      <div
        onClick={() => navigation.navigate('Two')}
      >tWO</div>
      <div
        onClick={() => navigation.navigate('Three')}
      >three</div>
    </>
  )
}

export default Home