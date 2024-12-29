import { useEffect, useRef } from 'react';
import BioLinks from '@/components/BioLinks/BioLinks';
import BioBlurb from '@/components/BioBlurb/BioBlurb';
import bioImg from '@/assets/bio.png'
import './Bio.css';

export default function Bio() {
    const imageRef = useRef<HTMLDivElement>(null);

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
        const rotateX = -(e.clientY - centerY) / 25;
        const rotateY = (e.clientX - centerX) / 25;
        
        imageRef.current.style.transform = 
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!imageRef.current) return;
        imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div className="bio">
            <div className="bio__img" ref={imageRef}>
                <img src={bioImg} alt="Headshot" />
            </div>

            <h1 className="bio__title">Hi, I'm Mark.</h1>
            <BioBlurb />
            <BioLinks />
        </div>
    );
}