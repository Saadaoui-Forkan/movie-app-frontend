import React from 'react'
import { Link } from 'react-router-dom'

function Movie() {
  return (
    <section className='movie-card'>
      <h1 className="movie">Movies to watch</h1>
      <ul className="cards">
        <li>
          <Link href="" className="card">
            <img src="https://m.media-amazon.com/images/M/MV5BNzQxNzQxNjk5NV5BMl5BanBnXkFtZTgwNTI4MTU0MzE@._V1_FMjpg_UX1000_.jpg" className="cardimg" alt="" />
            <div className="cardover">
              <div className="cardhead">
                <div className="cardheadtext">
                  <h3 className="cardtitle">Spider man no way home</h3>
                  <span className="cardstatus">1 hour ago</span>
                </div>
              </div>
              <p className="carddes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Movie