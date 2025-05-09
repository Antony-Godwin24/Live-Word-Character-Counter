import React from 'react'

const Home = ({text,setText}) => {
  return (
    <div class='home'>
      <form class='form'>
          {/* <label htmlFor="text">Text:</label> */}
          <input type="text" name="text" placeholder="Enter a Text" id="inp" value={text} onChange={(e)=>setText(e.target.value)}/>
      </form>
      
      {(text.trim().split(/\s+/).filter(word=>word!=="").length)<10 ? (
      <section class='count'>
        <h2>Character Count: {text.length}</h2>
        <h2>Word Count: {text.trim().split(/\s+/).filter(word=>word!=="").length}</h2>
      </section> )
      : (
      <section>
        <h2>Word Length Cannot Be More than 10.</h2>
      </section>
      )}

    </div>
  )
}

export default Home