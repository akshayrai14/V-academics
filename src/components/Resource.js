import React, { useEffect, useState } from 'react'
import './Resource.css';
import booksvid from './videos/pexels-tima-miroshnichenko-6550419.mp4'
import youtube from "./videos/Pexels Videos 1841356.mp4"
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import db from '../firebase';
import ppt from './videos/production ID_4393295.mp4';
import git from './videos/video.mp4'
const Resource = () => {
  console.log("Resource Page");
  const { name } = useParams();
  const { course } = useParams();
  var to = "/Course/"+course;
  const [books, setbooks] = useState([]);
  const [coursename, setcoursename] = useState("");
  const [coursecode, setcoursecode] = useState("");
  const [coursetype, setcoursetype] = useState("");
  const [credit, setcredit] = useState("");
  const [yt, setyt] = useState([]);
  const [github, setgithub] = useState([]);
  const [research, setresearch] = useState([]);
  const [syllabus, setsyllabus] = useState("");
  const [classppt, setclassppt] = useState("");
  useEffect(() => {
    db.collection(course).onSnapshot(snapshot => {
      snapshot.docs.map((doc) => {
        if (doc.data().coursecode == name) {
          // console.log(doc.data().Books);
          setcoursename(doc.data().coursename);
          setcoursecode(doc.data().coursecode);
          // console.log(doc.data().Youtube);
          setcoursetype(doc.data().coursetype);
          // console.log(doc.data().github);
          setcredit(doc.data().credit);
          setsyllabus(doc.data().Syllabus);
          setclassppt(doc.data().Classppt);
          console.log(doc.data().Classppt);
          // console.log(doc.data().research);
          if (doc.data().Books != undefined) {
            // doc.data().Books.map((book1) => { console.log(book1.name) 
            // });
            // books=data.Books;
            setbooks(doc.data().Books);
          }
          if (doc.data().Youtube != undefined) {
            // doc.data().Youtube.map((yt1) => { console.log(yt1.name) });
            // books=data.Books;
            setyt(doc.data().Youtube);
          }
          if (doc.data().github != undefined) {
            // var flag=0;
            // doc.data().github.map((gt1) => { 
            //   Object.keys(gt1).length==0?flag=0:flag=1;
            //   console.log(gt1.name) });
            // books=data.Books;
            setgithub(doc.data().github);
          }
          if (doc.data().research != undefined) {
            // doc.data().research.map((gt1) => { console.log(gt1.name) });
            // books=data.Books;
            setresearch(doc.data().research);
          }

        }
      })
    })
  }, []);
  
  return (
    <div className='fullpg'>
      <div className="container12">
        <div className="sidebar">
          <span className="logo">S</span>
          <a className="logo-expand" href="#">V-Academics</a>
          <div className="side-wrapper">
            <div className="side-title">MENU</div>
            <div className="side-menu">
              <a className="sidebar-link discover is-active" href="#top">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" />
                </svg>
                Discover
              </a>
              <a className="sidebar-link" href="#books">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.23 7.29V3.283c0-.427.34-.782.77-.782.385 0 .711.298.763.677l.007.104v4.01h4.78c2.38 0 4.335 1.949 4.445 4.38l.005.215v5.04c0 2.447-1.887 4.456-4.232 4.569l-.208.005H6.44c-2.38 0-4.326-1.94-4.435-4.379L2 16.905v-5.03c0-2.447 1.878-4.466 4.222-4.58l.208-.004h4.8v6.402l-1.6-1.652a.755.755 0 00-1.09 0 .81.81 0 00-.22.568c0 .157.045.32.14.459l.08.099 2.91 3.015c.14.155.34.237.55.237a.735.735 0 00.465-.166l.075-.071 2.91-3.015c.3-.31.3-.816 0-1.126a.755.755 0 00-1.004-.077l-.086.077-1.59 1.652V7.291h-1.54z" />
                </svg>
                Books & pdfs
              </a>
              <a className="sidebar-link trending" href="#yt">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.835 12.007l.002.354c.012 1.404.096 2.657.242 3.451 0 .015.16.802.261 1.064.16.38.447.701.809.905a2 2 0 00.91.219c.249-.012.66-.137.954-.242l.244-.094c1.617-.642 4.707-2.74 5.891-4.024l.087-.09.39-.42c.245-.322.375-.715.375-1.138 0-.379-.116-.758-.347-1.064-.07-.099-.18-.226-.28-.334l-.379-.397c-1.305-1.321-4.129-3.175-5.593-3.79 0-.013-.91-.393-1.343-.407h-.057c-.665 0-1.286.379-1.603.991-.087.168-.17.496-.233.784l-.114.544c-.13.874-.216 2.216-.216 3.688zm-6.332-1.525C3.673 10.482 3 11.162 3 12a1.51 1.51 0 001.503 1.518l3.7-.328c.65 0 1.179-.532 1.179-1.19 0-.658-.528-1.191-1.18-1.191l-3.699-.327z" />
                </svg>
                Youtube Playlists
              </a>
              <a className="sidebar-link" href="#gt">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1535 16.64L14.995 13.77C15.2822 13.47 15.2822 13 14.9851 12.71C14.698 12.42 14.2327 12.42 13.9455 12.71L12.3713 14.31V9.49C12.3713 9.07 12.0446 8.74 11.6386 8.74C11.2327 8.74 10.896 9.07 10.896 9.49V14.31L9.32178 12.71C9.03465 12.42 8.56931 12.42 8.28218 12.71C7.99505 13 7.99505 13.47 8.28218 13.77L11.1139 16.64C11.1832 16.71 11.2624 16.76 11.3515 16.8C11.4406 16.84 11.5396 16.86 11.6386 16.86C11.7376 16.86 11.8267 16.84 11.9158 16.8C12.005 16.76 12.0842 16.71 12.1535 16.64ZM19.3282 9.02561C19.5609 9.02292 19.8143 9.02 20.0446 9.02C20.302 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5 22 16.0446 22H8.17327C5.58911 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.4901 2 7.96535 2H13.2525C13.5 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.1931 9.01 17.0149 9.02C17.4333 9.02 17.8077 9.02318 18.1346 9.02595C18.3878 9.02809 18.6125 9.03 18.8069 9.03C18.9479 9.03 19.1306 9.02789 19.3282 9.02561ZM19.6045 7.5661C18.7916 7.5691 17.8322 7.5661 17.1421 7.5591C16.047 7.5591 15.145 6.6481 15.145 5.5421V2.9061C15.145 2.4751 15.6629 2.2611 15.9579 2.5721C16.7203 3.37199 17.8873 4.5978 18.8738 5.63395C19.2735 6.05379 19.6436 6.44249 19.945 6.7591C20.2342 7.0621 20.0223 7.5651 19.6045 7.5661Z" />
                </svg>
                classPPT material/Github links
              </a>
              <a className="sidebar-link" href="#cm">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.769 8.382H22C22 4.985 19.964 3 16.516 3H7.484C4.036 3 2 4.985 2 8.338v7.324C2 19.015 4.036 21 7.484 21h9.032C19.964 21 22 19.015 22 15.662v-.313h-4.231c-1.964 0-3.556-1.552-3.556-3.466 0-1.915 1.592-3.467 3.556-3.467v-.034zm0 1.49h3.484c.413 0 .747.326.747.728v2.531a.746.746 0 01-.747.728H17.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 01.433-1.652 2.091 2.091 0 011.576-.74zm.151 2.661h.329a.755.755 0 00.764-.745.755.755 0 00-.764-.746h-.329a.766.766 0 00-.54.213.727.727 0 00-.224.524c0 .413.34.75.764.754zM6.738 8.382h5.644a.755.755 0 00.765-.746.755.755 0 00-.765-.745H6.738a.755.755 0 00-.765.737c0 .413.341.75.765.754z" />
                </svg>
                Research papers
              </a>
              <a className="sidebar-link" target="_blank" href={syllabus}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.769 8.382H22C22 4.985 19.964 3 16.516 3H7.484C4.036 3 2 4.985 2 8.338v7.324C2 19.015 4.036 21 7.484 21h9.032C19.964 21 22 19.015 22 15.662v-.313h-4.231c-1.964 0-3.556-1.552-3.556-3.466 0-1.915 1.592-3.467 3.556-3.467v-.034zm0 1.49h3.484c.413 0 .747.326.747.728v2.531a.746.746 0 01-.747.728H17.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 01.433-1.652 2.091 2.091 0 011.576-.74zm.151 2.661h.329a.755.755 0 00.764-.745.755.755 0 00-.764-.746h-.329a.766.766 0 00-.54.213.727.727 0 00-.224.524c0 .413.34.75.764.754zM6.738 8.382h5.644a.755.755 0 00.765-.746.755.755 0 00-.765-.745H6.738a.755.755 0 00-.765.737c0 .413.341.75.765.754z" />
                </svg>
                Syllabus
              </a>
              <NavLink to={to}>
              <a className="sidebar-link" target="_blank">
              <svg viewBox="0 0 24 24" fill="currentColor" id="back">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.835 12.007l.002.354c.012 1.404.096 2.657.242 3.451 0 .015.16.802.261 1.064.16.38.447.701.809.905a2 2 0 00.91.219c.249-.012.66-.137.954-.242l.244-.094c1.617-.642 4.707-2.74 5.891-4.024l.087-.09.39-.42c.245-.322.375-.715.375-1.138 0-.379-.116-.758-.347-1.064-.07-.099-.18-.226-.28-.334l-.379-.397c-1.305-1.321-4.129-3.175-5.593-3.79 0-.013-.91-.393-1.343-.407h-.057c-.665 0-1.286.379-1.603.991-.087.168-.17.496-.233.784l-.114.544c-.13.874-.216 2.216-.216 3.688zm-6.332-1.525C3.673 10.482 3 11.162 3 12a1.51 1.51 0 001.503 1.518l3.7-.328c.65 0 1.179-.532 1.179-1.19 0-.658-.528-1.191-1.18-1.191l-3.699-.327z" />
                </svg>
                Go Back
              </a>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="wrapper" style={{ overflow: "scroll" }}>
          <div className="header">
            <div className="main-container">
              <div className="main-header anim">{coursename}</div>
              <div className="main-header anim" style={{ fontWeight: "lighter" }}>{coursecode} || {coursetype} Course || {credit} Credits</div>
              <div className="main-blogs" style={{ flexDirection: "row" }}>
                <div className="main-blog anim">
                  <div className="main-blog__title">
                    This is a Resource Page for Courses
                  </div>
                </div>
                <div className="main-blog">
                  <div className="main-blog__title">Look , Explore , Learn . .</div>
                </div>
              </div>
              <div className="small-header anim" id="books">Books :</div>
              <div className="videos">
                {books.map((book) => {
                  console.log(book.name);
                  var flag=Object.keys(book).length==0?0:1;
                  if(flag==1)
                  {  return (
                    <a target="_blank" href={book.link}>
                      <div className="video">
                        <div className="video-wrapper">
                          <video
                            key={booksvid}
                            onMouseOver={e => e.target.play()}
                            onMouseOut={e => e.target.pause()}
                            src={booksvid}
                          />
                        </div>
                        <div className="video-by" style={{ textAlign: "center" }}>{book.name}</div>
                      </div>
                    </a>
                      )
                  }
                  else{
                    return(
                      <div>No Available Books</div>
                    )
                  }
                })}

              </div>
              <div className="small-header anim" id="yt">Youtube Playlist Links</div>
              <div className="videos">

                {yt.map((y) => {
                  console.log(y);
                  var flag=Object.keys(y).length==0?0:1;
                  if(flag==1)
                  {
                    return (
                    <a href={y.link} target='_blank'>
                      <div className="video">
                        <div className="video-wrapper">
                          <video
                            key={youtube}
                            onMouseOver={e => e.target.play()}
                            onMouseOut={e => e.target.pause()}
                            src={youtube}
                          />
                        </div>
                        <div className="video-by" style={{ textAlign: "center" }}>{y.name}</div>
                      </div>
                    </a>
                  )
                }
                else{
                  return(
                    <div>No Available Youtube Links</div>
                  )
                }
                })
                }

              </div>
            <div className="small-header anim" id="gt">Class PPTs</div>
              <div className="videos">
                {classppt==""?<div>No Available Class PPTs</div>:
                    <a href={classppt} target='_blank'>
                      <div className="video">
                        <div className="video-wrapper">
                          <video
                            key={ppt}
                            onMouseOver={e => e.target.play()}
                            onMouseOut={e => e.target.pause()}
                            src={ppt}
                          />
                        </div>
                        <div className="video-by" style={{ textAlign: "center" }}>{coursename} Course Materials</div>
                      </div>
                    </a>
                }

              </div>
              <div className="small-header anim" id="gt">Github Links</div>
              <div className="videos">
              {
                github.map((g) => {
                  var flag=Object.keys(g).length==0 ? 1 : 0;
                  if(flag==0)
                  {
                    return (
                    <a href={g.link} target='_blank'>
                      <div className="video">
                        <div className="video-wrapper">
                          <video
                            key={git}
                            onMouseOver={e => e.target.play()}
                            onMouseOut={e => e.target.pause()}
                            src={git}
                          />
                        </div>
                        <div className="video-by" style={{ textAlign: "center" }}>{g.name}</div>
                      </div>
                    </a>
                  )
                  }
                  else{
                      return(
                        <div>No Available Github Links</div>
                      );
                  }
                })
                }
              </div>
              <div className="small-header anim" id="cm">Research Papers</div>
              <div className="videos">
              {
                research.map((g) => {
                  var flag=Object.keys(g).length==0 ? 1 : 0;
                  if(flag==0)
                  {
                    return (
                    <a href={g.link} target='_blank'>
                      <div className="video">
                        <div className="video-wrapper">
                          <video
                            key={youtube}
                            onMouseOver={e => e.target.play()}
                            onMouseOut={e => e.target.pause()}
                            src={youtube}
                          />
                        </div>
                        <div className="video-by" style={{ textAlign: "center" }}>{g.name}</div>
                      </div>
                    </a>
                  )
                  }
                  else{
                      return(
                        <div>No Available Research Papers</div>
                      );
                  }
                })
                }
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Resource;

