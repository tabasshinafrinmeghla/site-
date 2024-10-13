// import { Icon } from 'lucide-react'
// import { Item } from '@radix-ui/react-select'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'


const socials = [
  { Icon: <FiGithub />, path: 'https://github.com/tabasshinafrinmeghla' },
  { Icon: <FiLinkedin />, path: 'https://www.linkedin.com/in/tabasshin-meghla-3513251ab/' },
  { Icon: <FiFacebook />, path: 'https://www.facebook.com/tabasshinmeghla/' },
  { Icon: <FiTwitter />, path: 'https://x.com/tabasshin' },
  { Icon: <FiYoutube />, path: 'https://www.youtube.com/@tabasshinafrinmeghla9829' },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index}
            href={item.path} className={iconStyles}
          >
            {item.Icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
