import Carrousel from "./Carrousel"
import Footer from "./Footer"
import Marketing from "./Marketing"

const Main = () => {
   return (
      <main>
         <Carrousel/>
         <Marketing/>
         <Footer text = "tex1"/>
         {/* <Footer tex2 = "tex2" /> */}
      </main>
   )
}

export default Main