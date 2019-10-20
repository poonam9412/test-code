import * as React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
// import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux'
import { FeedbackAction } from '../redux/action/menu-page'

const styles = theme => ({
  textField: {
    paddingTop: 8,
    paddingBottom: 8,
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  }
})

const style = {
  backgroundStyle: {
    backgroundColor: "#ffcccc"
  }
}

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      phone: '',
      email: '',
      experience: '',
      aboutUs: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleExperience = (e) => {
    this.setState({
      experience: e.target.value
    })
  }

  handleAbout = (e) => {
    this.setState({
      aboutUs: e.target.value
    })
  }

  handleSend = () => {
    const value = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      phone: this.state.phone,
      experience: this.state.experience,
      aboutUs: this.state.aboutUs
    }
    this.props.dispatch(FeedbackAction(value))
  }
  render() {
    const {
      classes
    } = this.props
    return (
      <div style={style.backgroundStyle}>
        <div className="flex flex-row justify-center items-center pa2">
          <div className="flex w-60 flex-row justify-center pt4 mt3">

            <div className="flex flex-column ma3 w-30">
              <div className="black f2">COLLABATE </div>
              <div className="black f1  b h2">WITH  US</div>
              <div className="flex justify-center items-center pv3">
                <p style={{ wordBreak: 'break-all' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

                </p>


              </div>

            </div>

          </div>
          <div className="flex w-40">
            <div className="flex flex-column w-100">
              <div className="flex flex-row w-100 b">
                <div className="flex pa2">
                  <TextField
                    id="standard-name"
                    label="Name"
                    name="name"
                    placeholder="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                </div>
                <div className="flex pa2">
                  <TextField
                    id="standard-name"
                    label="SURNAME"
                    name="surname"
                    placeholder="Surname"
                    className={classes.textField}
                    value={this.state.surname}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                </div>
              </div>
              <div className="flex flex-row w-100 b">
                <div className="flex pa2">
                  <TextField
                    id="standard-name"
                    label="PHONE"
                    name="phone"
                    placeholder="Phone"
                    className={classes.textField}
                    value={this.state.phone}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                </div>
                <div className="flex pa2">
                  <TextField
                    id="standard-name"
                    label="EMAIL ADDRESS"
                    placeholder="Email"
                    name="email"
                    className={classes.textField}
                    value={this.email}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                </div>
              </div>
              <div className="flex flex-row w-100 b">
                <div className="flex flex-column">
                  <div className="flex">
                    <label>Experience</label>
                  </div>
                  <div className="flex pa2">
                    <Select
                      value={this.state.experience}
                      onChange={this.handleExperience}
                      className={classes.textField}
                      inputProps={{
                        name: 'Experience',
                        id: 'Experience',
                      }}
                    >
                      <MenuItem value="">Experience</MenuItem>
                      <MenuItem value="Good">Good</MenuItem>
                      <MenuItem value="Awsome">Awsome</MenuItem>
                      <MenuItem value="Bad">Bad</MenuItem>
                    </Select>

                  </div>
                </div>
                {/* <div>sdsad</div> */}
                <div className="flex flex-column">
                  <div className="flex">
                    <label>Where Did you know about us?</label>
                  </div>
                  <div className="flex pa2">

                    <Select
                      value={this.state.aboutUs}
                      onChange={this.handleAbout}
                      className={classes.textField}
                      placeholder="Experience"
                      inputProps={{
                        name: 'aboutUs',
                        id: 'aboutUs',
                      }}
                    >
                      <MenuItem value="">Where Did You hear about us</MenuItem>
                      <MenuItem value="News">News</MenuItem>
                      <MenuItem value="friend">Friend</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="contained" component="span" className={classes.button} onClick={this.handleSend}>
                  Send
        </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
function mapStatetoProps(state) {
  return {
    feedback : state.FeedBackReducer
  }
}
export default connect(mapStatetoProps)(withStyles(styles, { withTheme: true })(FeedbackForm))