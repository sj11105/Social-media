import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostList from './components/PostList'
import Form from './components/Form'
import Footer from './components/Footer'
import PostListProvider from './store/PostList.store'

function App() {
  const [selectedtab, setselectedtab] = useState("home")

  return (
    <PostListProvider>
   
  <div className='sidebar'>
    <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab}/>
    
    <div className='content'>
     <Header />
     {selectedtab=='home'?<PostList/>:<Form/>}
     <Footer />
     </div>
     </div>
     </PostListProvider>
   
    
  )
}

export default App
