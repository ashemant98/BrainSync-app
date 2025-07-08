import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import BtnLogin from '../components/BtnLogin';
import BtnSignup from '../components/BtnSignup';
import BGimg from '../components/BGimg';
import HomeIntro from '../components/HomeIntro';

function Home() {
   return (
      <div className="">
         <HomeNavbar />
         <section className="min-h-screen flex flex-col items-center justify-evenly text-center px-4 md:flex-row">
            <div className=''>
               <HomeIntro />
            </div>
            <BGimg />
         </section>
         <Footer />
      </div>
   );
}

export default Home;
