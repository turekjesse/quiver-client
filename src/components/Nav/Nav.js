import {useState} from 'react'
import { Menu, } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Nav = () => {

    const [activeItem, setActiveItem] = useState('home')

    const _handleItemClick = (e, name) => setActiveItem(name)

    return (
        <Menu pointing secondary fluid widths={8}>
          <Menu.Item
            name='home'
            as={Link}
            to="/"
            exact
            active={activeItem === 'home'}
            onClick={(e) => _handleItemClick(e, 'home')}
          />
          <Menu.Item
            name='boards'
            as={Link}
            to="/boards"
            active={activeItem === 'boards'}
            onClick={(e) => _handleItemClick(e, 'boards')}
          />
        </Menu>

    )
}

export default Nav