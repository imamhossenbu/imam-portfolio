import Link from 'next/link'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'


const links = [
    { icon: <FaGithub />, path: 'https://github.com/imamhossenbu' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/imam-hossen-ub' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/im.am8452/' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/imamhossainbu/' },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (<div className={containerStyles}>
        {links.map((item, index) => {
            return (
                <Link target='_blank' key={index} href={item.path} className={iconStyles} > {item.icon}</Link>
            )
        })}
    </div>
    )

}

export default Socials