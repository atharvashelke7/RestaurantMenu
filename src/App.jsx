
import { useState } from 'react';
import './App.css'


const menu = [
  {

    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-1.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"

  },
  {

    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 15.99,
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-2.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"

  },
  {

    id: 3,
    title: "Godzilla Milkshake",
    category: "Shake",
    price: 15.99,
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-3.jpeg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."

  },
  {

    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 15.99,
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-4.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"

  },
  {

    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 15.99,
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-5.jpeg",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"

  },
  {

    id: 6,
    title: "oreo dream",
    category: "Shake",
    price: 15.99,
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-6.jpeg",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"

  },
  {

    id: 7,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-7.jpeg",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"

  },
  {

    id: 8,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-8.jpeg",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"

  },
  {

    id: 9,
    title: "quarantine buddy",
    category: "breakfast",
    price: 16.99,
    img: "https://react-mini-project3-ashokit.vercel.app/images/item-9.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."

  },
];


function App() {

  const [currMenu, setCurrMenu] = useState(menu.slice(0, 5))


  return (

    <>

      <h1>Our Menu</h1>
      <button onClick={() => {
        setCurrMenu(menu);
      }}>All</button>
      <button onClick={() => {
        setCurrMenu(
          menu.filter((item) => item.category === "breakfast")
        )
      }}>Breakfast</button>
      <button onClick={() => {
        setCurrMenu(
          menu.filter((item) => item.category === "lunch")
        )
      }}>Lunch</button>
      <button onClick={() => {
        setCurrMenu(
          menu.filter((item) => item.category === "Shake")
        )
      }}>Shakes</button>
      <div className='totalMenu'>
        {
          currMenu.map((menuitem) => {

            const { id, title, category, price, img, desc } = menuitem;

            return (

              <article key={id} className='menuItem'>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <button style={{
                  
                }}>${price}</button>
                <p>{desc}</p>
              </article>
            )

          })
        }


      </div>


    </>
  )
}

export default App
