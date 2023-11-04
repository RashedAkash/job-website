import { Link } from 'react-router-dom';
import img from '../../assets/404.gif';

const Error = () => {
  return (
    <div>
      <img src={img} alt="" />
      <Link to='/'><button className=' btn btn-secondary'>Back to Home</button></Link>
    </div>
  );
};

export default Error;