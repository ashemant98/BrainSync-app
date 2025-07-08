import BtnLogin from './BtnLogin';
import BtnSignup from './BtnSignup';

function HomeNavbar() {
   return (
      <nav className="flex justify-between items-center px-4 md:px-6 py-3 bg-zinc-800 border-b border-zinc-800">
         <h1 className="text-xl md:text-3xl font-semibold text-white">
            BrainSync
         </h1>
         <div className="space-x-3">
            <BtnLogin />
            <BtnSignup />
         </div>
      </nav>
   );
}

export default HomeNavbar;

