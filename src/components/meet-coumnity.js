import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { communityAction } from '../redux/action/menu-page'
import { connect } from "react-redux";
//import * as a from '../files/assets/social@2x.png'
import './menu-page.css'

const styles = theme => ({
    card: {
        width: 330,
    },
    media: {
        height: 0,
        padding: '30.25%',
        margin: '6%'
        // 16:9
    },

})

class CardFolder extends React.Component {
    componentDidMount() {
        this.props.dispatch(communityAction())
    }
    render() {
        const refInput=React.createRef()
        const refInput1=React.createRef()
        const refInput2=React.createRef()
        const {
            classes,
            communityMenu
        } = this.props
        window.addEventListener('scroll', () => {
            if(refInput.current && refInput1.current && refInput2.current){
                refInput.current.style.animationIterationCount = `3`;
                 refInput1.current.style.animationIterationCount = `3`;
                  refInput2.current.style.animationIterationCount = `3`
            }
         //   refInput && refInput.current && refInput.current && refInput.current.style ? refInput.current.style.animationIterationCount = `1`: "";
        })

        console.log(communityMenu)
        const cardData = communityMenu && communityMenu.loanData && communityMenu.loanData.default
        console.log(cardData, "checkksas")
       // const cardData = cardValue && cardValue.use

        return (
            <div className="pa2 ma3">
                <div className="flex flex-row">
                    <div className="flex w-40 justify-end">
                        <div className="w-30 b">
                            <h1>Meet Our Community</h1>
                            <div className="flex w-80 justify-end pr3">
                                <Button variant="contained" component="span" className={classes.button}>
                                    KNOW MORE
        </Button>
                            </div>
                            <div className="flex w-100 justify-end pr3">
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                            </p>
                            </div>
                        </div>

                    </div>
                    <div className="w-60 flex flex-row pa4 cardStyle" ref={refInput}>
                        <div className="flex pa2">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={cardData && cardData[0] && cardData[0].image ? cardData[0].image : ''}
                                    title="Paella dish"
                                />

                            </Card>
                        </div>
                        <div className="pa2 flex">
                            <Card className={classes.card}>
                                <CardContent>

                                    <Typography variant="h5" component="h2" className="pv2">
                                        {cardData && cardData[0] && cardData[0].image ? cardData[0].siteName : ''}

                                    </Typography>

                                    <Typography variant="body2" component="p" className="pv2">
                                        {cardData && cardData[0] && cardData[0].content ? cardData[0].content : ''}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="w-100 flex flex-row pa4 cardStyle" ref={refInput1}>
                    <div className="w-50 flex pa2">
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={cardData && cardData[1] && cardData[1].image ? cardData[1].image : ''}
                                title="Paella dish"
                            />
                        </Card>
                    </div>
                    <div className="w-50 pa2 flex">
                        <Card className={classes.card}>
                            <CardContent>

                                <Typography variant="h5" component="h2" className="pv2">
                                    {cardData && cardData[1] && cardData[1].image ? cardData[1].siteName : ''}

                                </Typography>

                                <Typography variant="body2" component="p" className="pv2">
                                    {cardData && cardData[1] && cardData[1].content ? cardData[1].content : ''}

                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex">
                <div className="w-40 flex mh4 b black-70">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                </div>
                </div>
                </div>
                
                <div className="w-100 flex reverse pa4 cardStyle justify-end" ref={refInput2}>
                    <div className="w-50 flex">
                <div className="w-30 flex justify-end mh4 b black-70">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                </div>
                </div>
                    <div className="flex pa2">
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={cardData && cardData[2] && cardData[2].image ? cardData[2].image : ''}
                                title="Paella dish"
                            />

                        </Card>
                    </div>
                    <div className="pa2 flex">
                        <Card className={classes.card}>
                            <CardContent>

                                <Typography variant="h5" component="h2" className="pv2">
                                    {cardData && cardData[2] && cardData[2].image ? cardData[2].siteName : ''}

                                </Typography>

                                <Typography variant="body2" component="p" className="pv2">
                                    {cardData && cardData[2] && cardData[2].content ? cardData[2].content : ''}
                                    
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStatetoProps(state) {
    return {
        communityMenu: state.menuPageReducer
    }
}

export default connect(mapStatetoProps)(withStyles(styles, { withTheme: true })(CardFolder))