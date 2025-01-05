import { useEffect, useRef, useState } from 'react';
import BioLinks from '@/components/BioLinks/BioLinks';
import BioBlurb from '@/components/BioBlurb/BioBlurb';
import bioImg from '@/assets/bio.png'
import './Bio.scss';

export default function Bio() {
    const imageRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        // Rotate the image when the mouse moves over it
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => { // Cleanup function to remove event listeners when component unmounts
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const handleMouseMove = (e: MouseEvent) => {
        if (!imageRef.current) return;
        
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        
        // Only apply effect when mouse is over the image (with small buffer)
        const buffer = 20;
        const isInRange = 
            e.clientX >= left - buffer &&
            e.clientX <= left + width + buffer &&
            e.clientY >= top - buffer &&
            e.clientY <= top + height + buffer;

        if (!isInRange) {
            imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            return;
        }

        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        // Reduced rotation amount for subtler effect
        const rotateX = -(e.clientY - centerY) / 15;
        const rotateY = (e.clientX - centerX) / 15;
        
        imageRef.current.style.transform = 
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!imageRef.current) return;
        imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    const handleMoustClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsFlipped(!isFlipped);
    }

    const skillList = ['React', 'Vue', 'JavaScript', 'TypeScript', 'SCSS', 'HTML', 'Python', 'Jest', 'SQL', 'Git', 'Docker', 'CI/CD', 'Agile', 'Scrum', 'Leadership',  'Debugging', 'Teamwork', 'Adaptability'];

    return (
        <div className="bio">
            <div ref={imageRef} className={`bio__card ${isFlipped ? 'bio__card--flipped' : ''}`}>
                <div className="bio__img"  onClick={handleMoustClick}>
                    <img src={bioImg} alt="Headshot" />
                </div>
                <div className="bio__reverse" onClick={handleMoustClick}>
                    <h2>Skills</h2>
                    <div className="bio__skills">
                        { skillList.map((skill, index) => (
                            <p key={index} className="bio__skill">- {skill}</p>
                        ))}
                    </div>
                </div>
            </div>

            <h1 className="bio__title">Hi, I'm Mark.</h1>
            <BioBlurb />
            <BioLinks />
        </div>
    );
}