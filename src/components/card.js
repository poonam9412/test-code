import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import {recipeAction} from '../redux/action/recipe-action'
//import * as a from '../files/assets/social@2x.png'
import './menu-page.css'
import { Button } from '@material-ui/core';

const styles = theme => ({
    card: {
        width: 300,
        height: 400

    },
    media: {
        height: 0,
        paddingTop: '56.25%'
        // 16:9
    },

})

class CardFolder extends React.Component {

    componentDidMount() {
        this.props.dispatch(recipeAction())
    }
    render() {
           console.log((this.props.recipe),"check recipe===>")
        const {
            classes,
            recipe
        } = this.props

        const receipeValue = recipe && recipe.receipe && recipe.receipe.default && recipe.receipe.default.user
        
        const recipeData = (receipeValue || []).map((item,index) => {
            return(
                <div className="flex flex-row pa2 mh3 mt3">
                <Card className={classes.card} key={index}>
                                <CardMedia
                                    className={classes.media}
                                    image={item.image}
                                    title="Paella dish"
                                />
                                <h1>{item.siteName}</h1>
                                <CardContent>{item.content}</CardContent>
                            </Card>
                            </div>
            )
        })
        return (
            <div className="pa2">
                <div className="flex ma3 ph4">
                    <div className="flex flex-column w-50 ml-4">
                        <h2 className="ma0">POPULAR</h2>
                        <h1 className="ma0">RECIPES</h1>
                    </div>
                    <div className="flex flex-column">
<div className="flex reverse"><h2>Do you want to share your own recipe?</h2></div>
<div><Button variant="contained" component="span" className={classes.button}>
                    Send it now
        </Button></div>
</div>
                </div>
                <div className="flex flex-row justify-center items-center ">
                    <div className="flex w-60 flex-row justify-center pt4 mt3">
                            {recipeData}
                
                                    </div>
                </div>
            </div>
        )
    }
}
function mapStatetoProps(state) {
    return {
        recipe: state.recipeReducer
    }
}

export default connect(mapStatetoProps)(withStyles(styles, { withTheme: true })(CardFolder));