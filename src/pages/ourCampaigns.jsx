import React from 'react'

const ourCampaigns = () => {
    const ourCampaignData = [
        {
            id: 1,
            image: '/img/',
            title: 'With Collective Action Comes Greater Impact',
            content: 'lorejbahfshjvsbsvbhsbvsvhsvbhs',
            credits: 'By JoD'
        },
        {
            id: 2,
            image: '/img/',
            title: 'Healthy Food',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            credits: 'By JoD'
        },
        {
            id: 2,
            image: '/img/',
            title: 'Healthy Food',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
            credits: 'By JoD'
        },
    ]
    return (
        <div className='ourCamBody'>
            <div className='mainHeading'>
                <h1>Our Campaigns</h1>
            </div>
            <div className='mainBody'>
                {ourCampaignData.map((e) => {
                    return (
                        <div key={e.id} className='cardsBody'>
                            <div className='card'>
                                <img className='imges' src={e.image} alt="" />
                                <div id='cardHeading'>
                                    <h3>{e.title}</h3>
                                    <br></br>
                                </div>
                                <div id='cardContent'>
                                    <h5>{e.content}</h5>
                                </div>
                                <br></br>
                                <div id='credits'>
                                    <p>{e.credits}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ourCampaigns