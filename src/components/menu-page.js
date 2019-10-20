import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import './menu-page.css'
import * as a from '../files/assets/stamp.png'
import * as locationPointer from '../files/assets/location-icon.png'
import Scrollspy from 'react-scrollspy'
import Footer from './footer'
import FeedbackForm from './feedback'
import Card from './card'
import Typography from '@material-ui/core/Typography';
import MeetCommunity from './meet-coumnity'
import Menu from './menu'

const styles = theme => ({
    slider: {
        width: '50%'
    },
    paperStyle: {
        width: '100%',
        height: 450,
        padding: 20
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    button: {
        margin: theme.spacing.unit,
    },
    SliderTrack: {
        height: 5,
    },

});

class MenuPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            sections: []
        }
    }



    render() {
        const cardContent = <><Typography gutterBottom variant="h5" component="h2">
        Lizard
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        across all continents except Antarctica
      </Typography></>
        return (
            <div className='cf'>
                <section id='s-1'>
                    <header>
                        <div className="cover bg-left bg-center-l customImage">
                            <div className="pb5 pb6-m pb7-l">
                                <nav className="dt w-100 center">
                                    <div className="dtc v-mid pa3">
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >LOGIN</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >ABOUT</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >COMMUNITY</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >LOCATION</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >OUR MENU</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >RECEPIES</a>
                                    </div>
                                    <div className="dtc v-mid tr pa3">
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >CONTACT</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >LOGIN</a>
                                    </div>
                                </nav>
                                <div className="w-50 mt5 pr5 pt2 tc">
                                {/* eslint-disable-next-line */}
                                    <img src={a} alt="image"/>
                                </div>
                                <div className='fixed'>
                                    <Scrollspy
                                        items={['s-1', 's-2','s-3','s-4','s-5','s-6','s-7']}
                                        currentClassName="is-active" >
                                        <li><a href="#s-1"> 1</a></li>
                                        <li><a href="#s-2"> 2</a></li>
                                        <li><a href="#s-3"> 3</a></li>
                                        <li><a href="#s-4"> 4</a></li>
                                        <li><a href="#s-5"> 5</a></li>
                                        <li><a href="#s-6"> 6</a></li>
                                        <li><a href="#s-7"> 7</a></li>
                                    </Scrollspy>
                                </div>
                                <div className="tc mt3">
                                    <h1 class=" f-headline-l measure-narrow  white mv0">
                                        THE BEST FOODIE EXPERIENCE
                                </h1>
                                    <h1 className="fw6 f2 white mt3 mb4">NOW IN LONDON</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                </section>
                <section id='s-2'>
                    <MeetCommunity />
                </section>
                
                <section id='s-3'>
                    <div className='bimage'>
                        <div className='w-20 pt4 ml5'>
                            <div className='bg-white containerMap'>
                                <h2 className='centeredMapIcon'>LOCATION </h2>
                                12 Upper St. Martin’s Lane <br />
                                WC2H 9FB, London
                            </div>
                        </div>
                        <div className='w-50 tr'>
                        {/* eslint-disable-next-line */}
                            <img src={locationPointer} alt="image"/>
                        </div>
                    </div>
                </section>
                <section className="parallax"></section>
                <section id='s-4'>
                    <Menu />
                </section>
                <section id='s-5'><Card cardContent={cardContent}/></section>
                <section id='s-6' >
                <FeedbackForm />
                </section>
                <section id='s-7'>
                    <Footer />
                </section>
            </div>
        )
    }
}


export default withStyles(styles, { withTheme: true })(MenuPage);