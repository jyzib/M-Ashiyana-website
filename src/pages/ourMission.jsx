import React from 'react'

const ourMission = () => {
  const ourmissiondata = [
    {
      id: 1,
      image: '/img/house.png',
      title: 'Residence',
      dep: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '

    },
    {
      id: 2,
      image: '/img/foods.png',
      title: 'Healthy Food',
      dep: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '

    },
    {
      id: 3,
      image: '/img/books.png',
      title: 'Education',
      dep: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '

    },
    {
      id: 4,
      image: '/img/Treetment.png',
      title: 'Trearment',
      dep: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '

    },
  ]
  return (
    <div className='our-mission1' >

      <div className="our-mission">
        <div className="Our-mission-text">
          <h3 className='our-mission-title' >Our mission</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quis eius at? Sint nostrum laudantium suscipit illum architecto nam. Facere animi voluptatum, cumque adipisci quaerat explicabo distinctio vitae quibusdam recusandae!</p>
        </div>

        <div className="our-mission-body">
          {ourmissiondata.map((e) => {
            return (<div key={e.id} className="our-mission-icon">
              <div className="icon-image">
                <img className='icon-img' src={e.image} alt="" />
              </div>
              <div className="icon-text">
                <h2 className='icon-text-title' >{e.title}</h2>
                <p className='icon-text-dep' >{e.dep}</p>
              </div>
            </div>)
          })}


        </div>
      </div>
    </div>
  )
}

export default ourMission
