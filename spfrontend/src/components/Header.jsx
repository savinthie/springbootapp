import React, { Component } from 'react';
import './header.css';
import {AiTwotoneFolderOpen} from 'react-icons/ai'


class Header extends Component {
    constructor(props){
        super(props)


        this.state={

        }
    }

    render() {
        return (
            <div>

                <header>
                    <nav className='nav'>
                        <div className='nav-brand'>
                            <AiTwotoneFolderOpen />
                          PROJECT MANAGER
                        </div>

                    </nav>
                </header>
                
            </div>
        );
    }
}

export default Header;
