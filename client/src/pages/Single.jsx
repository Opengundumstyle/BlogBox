import React from 'react'
import { CiEdit,CiTrash } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
       <div className="content">
           <img src="https://pbs.twimg.com/media/FOlXWs8UYAM0KZz?format=jpg&name=medium" alt="edc"/>
            <div className="user">
               <img src="https://media.licdn.com/dms/image/C5603AQFKxMU73X0wlw/profile-displayphoto-shrink_800_800/0/1590978917766?e=2147483647&v=beta&t=08xN-qwHwOXJY3jjvXkkNC8yvOEOp0GsoMcjUlUg0JE" alt="" />
                <div className="info">
                <span>Zhile Lin</span>
                <p>posted 30 minutes ago</p>
                </div>
                <div className="edit">
                   <Link to={`/write?edit=2`}>
                     <CiEdit size={25} className='editPost'/>
                   </Link>
                     <CiTrash size={25} className='deletePost'/>
                </div>
            </div>
            <h1>ULTIMATE GUIDE TO EDC LAS VEGAS</h1>
  
            <p>EDC takes a lot of planning and here are the things you need to start thinking about to start planning: budget, tickets, flights, where to stay and transportation.<br/>
            <br/>
              BUDGETING FOR EDC
              I’ve gotten asked how much an EDC trip can cost and it can vary depending on the experience you want. If you’re doing VIP, staying on the strip with a shuttle pass, you’re talking over $1500. If you’re doing GA, airbnb split between friends, and driving, you could get it under $1,000. Just depends on what works for your budget. Here is what my first year of EDC in 2017 looked like:
              <br/>
              <br/>
              Ticket: $415.15
              Shuttle Pass: $110.95
              Hotel Room at New York New York for 4 nights: $75 (This is my portion. It was split between a group of people)
              Outfits & Accessories: ~$250
              Food (snacks in room, meals not at EDC, food at EDC): $150
              My EDC 2017 Total: $1,050 (**estimate I could have spent more**)
              This is what it looked like this year for EDC 2018:
              <br/>
              <br/>
              Ticket: $409.00
              Premier Parking Pass/Gas: $42.49 (split with a group)
              Airbnb: $50 (split with a group)
              Outfits & Accessories: $100 (had gotten free outfits from brands/repurposed other festival clothing items)
              Food: $100 (our airbnb had a kitchen so we stocked up so I wasn’t spending as much money on food this year)
              My EDC 2018 Total: $701.49
              Biggest advice is figure out what works for your budget and save!!!
              <br/>
              <br/>
              TICKETS
              You have three options when it comes to tickets, all of which you can have payment plans for to help you budget paying for these tickets. FYI: EDC did sell out in April of 2018, one month before EDC. Secure your ticket now or if it sells out purchase off reliable sources.
              <br/>
              <br/>
              GA – $339 before fees
              The cheapest ticket that gets you entrance into the festival.
              <br/>
              <br/>
              GA+ – $519 before fees
              A new addition to tickets this year, pay a little bit more than GA for quicker lines into the festival and nicer bathrooms.
              <br/>
              <br/>
              VIP – $779 before fees
              Ball out on the VIP experience which includes: fast entry and VIP-exclusive amenities such as gourmet food and drink options, special activities and entertainment. Take in the view from from designated elevated platforms at certain stages. There’s a  VIP Ferris wheel, hookah bar, VIP Splash Pool, body paint and more!

              </p>

       </div>
      <Menu/>
    </div>
  )
}

export default Single
