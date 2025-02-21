import { contactImgs } from '../vars';
import { Link } from 'react-router';

function Icons() {
  return (
    <ul className="flex gap-x-6 gap-y-4 items-center">
      {contactImgs.map((img) => (
        <li>
          <Link to={img.href}>
            <div className="p-5 rounded-full bg-vibrantorange">
              <img src={img.src} alt={img.alt} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Icons;
