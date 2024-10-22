import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {

  const [bookmarks, setBookmarks] = useState([])

  const hendleAddToBookmark = (blog) => {
       const newBookmarks = [...bookmarks, blog]
       setBookmarks(newBookmarks)
  }

  const [readingTime, setReadingTime] = useState(0)

  const hendleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto space-x-4'>
        <Blogs hendleAddToBookmark={hendleAddToBookmark}
         hendleMarkAsRead={hendleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
