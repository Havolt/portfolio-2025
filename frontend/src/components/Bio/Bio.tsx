import bioImg from '@/assets/bio.png'
import './Bio.css';

export default function Bio() {
    return (
        <div className="bio">
            <div className="bio__img">
                <img src={bioImg} alt="Headshot" />
            </div>

            <h1 className="bio__title">Hi, I'm Mark. I'm a web developer and designer.</h1>
        </div>
    );
}