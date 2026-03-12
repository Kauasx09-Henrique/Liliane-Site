import React, { useEffect, useRef, useState } from 'react';
import '../pages/styles/reveal.css';

const Reveal = ({ children, animation = 'fade-up', delay = 0, triggerOnce = true }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce && currentRef) {
                        observer.unobserve(currentRef);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [triggerOnce]);

    return (
        <div
            ref={ref}
            className={`reveal-wrapper ${isVisible ? 'is-visible' : ''} ${animation}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default Reveal;