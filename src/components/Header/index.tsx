import { SignInButton } from '../SignInButton'
import { VscMenu , VscClose} from 'react-icons/vsc'
import styles from './styles.module.scss'
import { useState } from 'react'

export function Header() {

	const [idNavMenu, setIdNavMenu] = useState('nav-menu')

    function handleOpenToggle(){
        setIdNavMenu('show-menu');
    }

    function handleCloseToggle(){
        setIdNavMenu('nav-menu');
    }

	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/images/logo.svg" alt="ig.news" />
					<div className={styles.menuContent} id={idNavMenu}>
						<nav>
							<a className={styles.active} href="#" onClick={handleCloseToggle}>Home</a>
							<a href="#" onClick={handleCloseToggle}>Posts</a>
							<SignInButton />
						</nav>
						
					</div>
				{ idNavMenu === 'nav-menu' 
				? <VscMenu color="#fff" size="30" onClick={handleOpenToggle}/> 
				: <VscClose color="#fff" size="30" onClick={handleCloseToggle}/>
					
				}
			</div>
		</header>
	)
}		