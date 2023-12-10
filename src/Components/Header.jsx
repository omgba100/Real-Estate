import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-rose-600'>Omgba</span>
        <span className='text-blue-700'>Estate</span>
      </h1>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder="Search Item....." className='bg-transparent focus:outline-none w-24 sm:w-64' />
        <FaSearch className='text-slate-600'/>
      </form>
      <ul className='flex gap-4'>
        <link to='../pages/home'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </link>
        <Link to='about'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
        <Link to='/SignIn'>
        <li className=' text-slate-700 hover:underline'>SignIn</li>
        </Link>
      </ul>
        </div>
      
    </header>
  );
}

export default Header;
