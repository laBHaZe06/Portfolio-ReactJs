import React from 'react'

const SocialNetwork = () =>{
    const anim = () => {
        // console.log('yes');
        let navLink = document.querySelectorAll('.social-network a');
        // on sélectionne les trois social-network
        // pour que chacun soit animé individuellement j'utilise un forEach 
        navLink.forEach(link => {
            //a chaque link individuelle 
            // on récupere l'évènement de la souris
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX - 20;  // valeur de la souris dans la console offset 
                let attrY = e.offsetY - 13;

                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
            })
            link.addEventListener('mouseleave', () => {
                link.style.transform = '';
            })
        })
    }
    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://www.facebook.com" target="_blank"
                rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-facebook-f"></i></li>
                </a>
                <a href="https://www.instagram.com" target="_blank"
                rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
                <a href="https://www.linkedin.com" target="_blank"
                rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-linkedin"></i></li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;