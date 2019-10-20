import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
//import * as a from '../files/assets/social@2x.png'
import './menu-page.css'

const styles = () => ({
    card: {
        width: 300,
        height:400

      },
      media: {
        height: 0,
        paddingTop: '56.25%'
        // 16:9
      },
    
  })

class Menu extends React.Component {
   
    render() {
        const refInput=React.createRef()
        const {
            classes
        } = this.props

        return (
            <div className="pa2 bg-black-05">
                <div className="flex w-100 justify-center">
                    <h1>OUR MENU</h1>
                </div>
                <div className="flex flex-row justify-center items-center" ref={refInput}>
                    <div className="flex w-60 flex-row justify-center pt4 mt3 ">
                        <div className="flex flex-column card-contain" >
                            <Card className={classes.card}>
                                <h1>Starters</h1>
                                <CardContent>
                                    <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span className="border">$26</span>
                                        <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span>$26</span>
                                        <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span >$26</span></CardContent>

                            </Card>
                        </div>
                        <div className="flex flex-column card-contain" >
                            <Card className={classes.card}>
                                <h1>Side Dish</h1>
                                <CardContent className="pa2">
                                    <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span className="border">$26</span>
                                        <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span>$26</span>
                                        <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span >$26</span></CardContent>

                            </Card>
                        </div>
                        
                        <div className="flex flex-column card-contain" >
                            <Card className={classes.card}>
                                <h1>Main Course</h1>
                                <CardContent>
                                    <span>
                                        <p>Desserts</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span className="border">$26</span>
                                        <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span>$26</span>
                                        <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span >$26</span></CardContent>

                            </Card>
                        </div>
                        <div className="flex flex-column card-contain" >
                            <Card className={classes.card}>
                                <h1>Desserts Dish</h1>
                                <CardContent>
                                    <span>
                                        <p>Desserts</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span className="border">$26</span>
                                        <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span>$26</span>
                                        <span>
                                        <p>Quiento Dish</p>
                                        <p>spinach , brocoli,ice</p></span>
                                        <span >$26</span></CardContent>

                            </Card>
                        </div>
                        </div>
                </div>
                <div className="parallax"></div>
                    
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Menu)