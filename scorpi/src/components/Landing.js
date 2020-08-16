import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div>
  <main>
    {/* Site Title */}
    <section className="site-title">
      <div className="site-background">
        <h3 style={{fontFamily: '"Lexend, cursive'}}>ARTS &amp; GRAPHICS</h3>
        <h1 style={{fontFamily: '"Airstrike, cursive'}}>99% THINGS WE SEE ARE PIXELS</h1>
        <button className="btn" style={{marginTop: '150px'}}>Explore</button>
      </div>
    </section>
    {/* Blog Carousel */}
    <section>
      <div className="blog">
        <div className="container">
          <div className="owl-carousel owl-theme blog-post">
            <div className="blog-content">
              <img src="../assets/BP3.jpg" alt="post-1" />
              <div className="blog-title">
                <h3>Vector Art</h3>
                <h4>Lucy</h4>
                <button className="btn btn-blog">Check</button>
                <span>2 Months</span>
              </div> 
            </div>
            <div className="blog-content">
              <img src="../assets/BP1.jpg" alt="post-1" />
              <div className="blog-title">
                <h3>Trace Art</h3>
                <h4>John</h4>
                <button className="btn btn-blog">Check</button>
                <span>15 Day</span>
              </div> 
            </div>
            <div className="blog-content">
              <img src="../assets/BP4.png" alt="post-1" />
              <div className="blog-title">
                <h3>Vector Art</h3>
                <h4>Christian</h4>
                <button className="btn btn-blog">Check</button>
                <span>4 Months</span>
              </div> 
            </div>
            <div className="blog-content">
              <img src="../assets/bp5.jpg" alt="post-" />
              <div className="blog-title">
                <h3>Vector Art</h3>
                <h4>Adam</h4>
                <button className="btn btn-blog">Check</button>
                <span>3 Days</span>
              </div> 
            </div>
            <div className="blog-content">
              <img src="../assets/BP6.jpg" alt="post-1" />
              <div className="blog-title">
                <h3>WPAP Vector Art</h3>
                <h4>Lucy</h4>
                <button className="btn btn-blog">Check</button>
                <span>5 Months</span>
              </div> 
            </div>
            <div className="blog-content">
              <img src="../assets/BP7.jpg" alt="post-1" />
              <div className="blog-title">
                <h3>WPAP Vector Art</h3>
                <h4>Paul</h4>
                <button className="btn btn-blog">Check</button>
                <span>5 Months</span>
              </div> 
            </div>
          </div>
          <div className="owl-navigation">
            <span className="owl-nav-prev">
              <i className="fas fa-long-arrow-alt-left" />
            </span>
            <span className="owl-nav-next">
              <i className="fas fa-long-arrow-alt-right" />
            </span>
          </div>
        </div>
      </div>
    </section>
    {/* Site Content */}
    <section className="container">
      <div className="site-content">
        <div className="posts">
          <div className="post-content">
            <div className="post-image">
              <div>
                <img src="../assets/blog-post1.png" className="img" alt="blog1" />
              </div>
              <div className="post-info flex-row">
                <span><i className="fas fa-user text-gray" />&nbsp;&nbsp;Designer</span>
                <span><i className="fas fa-calendar-alt text-gray" />&nbsp;&nbsp;Feb 3,2020</span>
                <span>3 Comments</span>
              </div>
            </div>
            <div className="post-title">
              <a href="#">Why we are here?</a>
              <p>We are here to present you the world of designs and toys of designs and their creativity</p>
              <button className="btn post-btn">Read More &nbsp;<i className="fas fa-arrow-right" /></button>
            </div>
          </div>
          <hr />
          <div className="post-content">
            <div className="post-image">
              <div>
                <img src="../assets/blog-post2.png" className="img" alt="blog2" />
              </div>
              <div className="post-info flex-row">
                <span><i className="fas fa-user text-gray" />&nbsp;&nbsp;Designer</span>
                <span><i className="fas fa-calendar-alt text-gray" />&nbsp;&nbsp;Feb 3,2020</span>
                <span>3 Comments</span>
              </div>
            </div>
            <div className="post-title">
              <a href="#">What do we design?</a>
              <p>We design the most creative and appealing themes by just getting a little bit of information from our clients. Our designers we will more glorify the ideas of our clients and then bring out the best outcome in form of attractive themes for their websites</p>
              <button className="btn post-btn">Read More &nbsp;<i className="fas fa-arrow-right" /></button>
            </div>
          </div>
          <hr />
          <div className="post-content">
            <div className="post-image">
              <div>
                <img src="../assets/blog-post3.jpg" className="img" alt="blog3" />
              </div>
              <div className="post-info flex-row">
                <span><i className="fas fa-user text-gray" />&nbsp;&nbsp;Designer</span>
                <span><i className="fas fa-calendar-alt text-gray" />&nbsp;&nbsp;Feb 3,2020</span>
                <span>3 Comments</span>
              </div>
            </div>
            <div className="post-title">
              <a href="#">How our designers corporate?</a>
              <p>The field of User Experience is all about observing, understanding, collaborating, and communicating. This makes it vital for designers to work in collaboration, not just with each other but with other teams as well. Our designers are 24/7 available for any kind of services. They can easily understand the problems of their customers and provide them the solution of their problems.</p>
              <button className="btn post-btn">Read More &nbsp;<i className="fas fa-arrow-right" /></button>
            </div>
          </div>
          <hr />
          <div className="post-content">
            <div className="post-image">
              <div>
                <img src="../assets/blog-post4.png" className="img" alt="blog4" />
              </div>
              <div className="post-info flex-row">
                <span><i className="fas fa-user text-gray" />&nbsp;&nbsp;Designer</span>
                <span><i className="fas fa-calendar-alt text-gray" />&nbsp;&nbsp;Feb 3,2020</span>
                <span>3 Comments</span>
              </div>
            </div>
            <div className="post-title">
              <a href="#">How we work ?</a>
              <p>Teamwork is the most important key factor in any type of project whether it is related with theme designing or inventing something. Our designers team chemistry is very excellent, and each member of the team always work on the project with same mindset.  That’s why, the template themes on our website looks more appealing to our daily customers. Those persons who are looking for solution of their problems whether it is related with photoshop or vector art, can easily find the best solution on our website.</p>
              <button className="btn post-btn">Read More &nbsp;<i className="fas fa-arrow-right" /></button>
            </div>
          </div>
          <hr />
          <div className="post-content">
            <div className="post-image">
              <div>
                <img src="../assets/blog-post5.png" className="img" alt="blog5" />
              </div>
              <div className="post-info flex-row">
                <span><i className="fas fa-user text-gray" />&nbsp;&nbsp;Designer</span>
                <span><i className="fas fa-calendar-alt text-gray" />&nbsp;&nbsp;Feb 3,2020</span>
                <span>3 Comments</span>
              </div>
            </div>
            <div className="post-title">
              <a href="#">How designs help in growing your business?</a>
              <p>Design opens up valuable opportunities for businesses. Its importance is often underestimated, but good design can bring some significant business benefits. Design can then help you turn these ideas into innovative and competitive products and services that are suitable for your market. The research and prototype stages of the design process can generate new product ideas and allow you to discover your customers' needs and preferences.</p>
              <button className="btn post-btn">Read More &nbsp;<i className="fas fa-arrow-right" /></button>
            </div>
          </div>
          <div className="pagination flex-row">
            <a href="#"><i className="fas fa-chevron-left" /></a>
            <a href="#" className="pages">1</a>
            <a href="#" className="pages">2</a>
            <a href="#" className="pages">3</a>
            <a href="#"><i className="fas fa-chevron-right" /></a>
          </div>
        </div>
        <aside className="sidebar">
          <div className="category">
            <h2>Category</h2>
            <ul className="category-list">
              <li className="list-items">
                <a href="#">Tools</a>
                <span>(12)</span>
              </li>
              <li className="list-items">
                <a href="#">Designs</a>
                <span>(991)</span>
              </li>
              <li className="list-items">
                <a href="#">Top Designer</a>
                <span>(47)</span>
              </li>
              <li className="list-items">
                <a href="#">Templetes</a>
                <span>(100242)</span>
              </li>
              <li className="list-items">
                <a href="#">Learn</a>
                <span>(54)</span>
              </li>
            </ul>
          </div>
          <div className="popular-designers">
            <h2>Popular designers</h2>
            <div className="post-content">
              <div className="post-image">
                <div>
                  <img src="../assets/designer1.jpg" className="img" alt="blog5" />
                </div>
                <div className="post-info flex-row">
                  <span><i className="fa fa-birthday-cake text-gray" />&nbsp;&nbsp;Stefan Sagmeister</span>
                  <span>6/8/1962</span>
                </div>
              </div>
              <div className="post-title">
                <a href="#">Stefan Sagmeister is a New York-based graphic designer, storyteller, and typographer. Sagmeister co-founded a design firm called Sagmeister &amp; Walsh Inc. with Jessica Walsh in New York City.</a>
              </div>
            </div>
            <div className="post-content">
              <div className="post-image">
                <div>
                  <img src="../assets/designer2.jpg" className="img" alt="blog5" />
                </div>
                <div className="post-info flex-row">
                  <span><i className="fa fa-birthday-cake text-gray" />&nbsp;&nbsp;Jessica Walsh</span>
                  <span>30/09/1986</span>
                </div>
              </div>
              <div className="post-title">
                <a href="#">Jessica Walsh is an American graphic designer, art director and illustrator, and founder of creative agency &amp; Walsh.</a>
              </div>
            </div>
            <div className="post-content">
              <div className="post-image">
                <div>
                  <img src="../assets/designer3.jpg" className="img" alt="blog5" />
                </div>
                <div className="post-info flex-row">
                  <span><i className="fa fa-birthday-cake text-gray" />&nbsp;&nbsp;David Carson</span>
                  <span>8/9/1955</span>
                </div>
              </div>
              <div className="post-title">
                <a href="#">David Carson is an American graphic designer, art director and surfer. He is best known for his innovative magazine design, and use of experimental typography. He was the art director for the magazine Ray Gun, in which he employed much of the typographic and layout approach for which he is known.</a>
              </div>
            </div>
            <div className="post-content">
              <div className="post-image">
                <div>
                  <img src="../assets//designer4.jpg" className="img" alt="blog5" />
                </div>
                <div className="post-info flex-row">
                  <span><i className="fa fa-birthday-cake text-gray" />&nbsp;&nbsp;Chip Kidd</span>
                  <span>12/08/1955</span>
                </div>
              </div>
              <div className="post-title">
                <a href="#">Charles Kidd is an American graphic designer, best known for his book covers. Based in New York City, Kidd has become one of the most famous book cover designers to date.</a>
              </div>
            </div>
          </div>
          <div className="newsletter">
            <h2>NewsLetter</h2>
            <div className="form-element">
              <input type="text" className="input-element" placeholder="Email" />
              <button className="btn form-btn">Subscribe</button>
            </div>
          </div>        
          <div className="popular-tags">
            <h2>Popular Tags</h2>
            <div className="tags flex-fow">
              <span className="tag">Adobe</span>
              <span className="tag">Photoshop</span>
              <span className="tag">Illustrator</span>
              <span className="tag">Manipulation</span>
              <span className="tag">Logo</span>
              <span className="tag">Templates</span>
              <span className="tag">Designs</span>
              <span className="tag">Mockups</span>
              <span className="tag">XD</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="footer">
    <div className="container">
      <div className="about-us">
        <h2>About Us</h2>
        <p>Scorpi Designs provides you the best solution of your problems and creative templates for your websites. You will find so many features on a single website that will help you to polish your skills. We have hired team of professional designers who would like to assist you in any type of project and bring out the best result.</p>
      </div>
      <div className="newsletter">
        <h2>Newsletter</h2>
        <p>Stay updated</p>
        <div className="form-element">
          <input type="text" placeholder="Email" /><span><i className="fas fa-chevron-right" /></span>
        </div>
      </div>
      <div className="instagram">
        <h2>Instagram</h2>
        <div className="flex-row">
          <img src="../assets/insta1.jpg" alt="inst1" />
          <img src="../assets/insta2.jpg" alt="inst2" />
          <img src="../assets/insta3.jpg" alt="inst3" />
        </div>
        <div className="flex-row">
          <img src="../assets/insta4.jpg" alt="inst4" />
          <img src="../assets/insta5.jpg" alt="inst5" />
          <img src="../assets/insta6.jpg" alt="inst6" />
        </div>
      </div>
      <div className="follow">
        <h2>Follow Us</h2>
        <p>Social</p>
        <div>
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
        </div>
      </div>
    </div>
    <div className="rights flex-row">
      <h4 className="text-gray">Copyright ©2020 All rights reserved | developed By @Scorpion </h4>
    </div>
    <div className="move-up">
      <span><i className="fas fa-arrow-circle-up fa-2x" /></span>
    </div>
  </footer>
</div>

    )
  }
}

export default Landing