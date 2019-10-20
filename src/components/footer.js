import * as React from 'react'
import * as a from '../files/assets/social@2x.png'

class Footer extends React.Component {
    render() {
        return (
            <div className="pa2 bg-black-80">
                <div className="flex flex-row justify-center items-center ">
                    <div className="flex w-60 flex-row justify-center pt4 mt3">
                        <div className="flex flex-column ma3">
                            <div className="white-90 pa2">Section 1</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                        </div>
                        <div className="flex flex-column ma3">
                            <div className="white-90 pa2">Section 2</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                        </div>
                        <div className="flex flex-column ma3">
                            <div className="white-90 pa2">Section 3</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                        </div>
                        <div className="flex flex-column ma3">
                            <div className="white-90 pa2">Section 4</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                        </div>
                        <div className="flex flex-column ma3">
                            <div className="white-90 pa2">Section 5</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                            <div className="white-70 pa2">Subsection</div>
                        </div>
                    </div>
                    <div className="flex w-40">
                        <div className="flex flex-column w-100 b">
                            <div className="flex white-90 f2 justify-center">THIS IS THE</div>
                            <div className="flex white-90 f1 justify-center">LOGO</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex white-60 justify-center w-60 pa3 ma3">2017.Company.Lorem ipsum dolor sit amet,consectetur adipiscing slit</div>
                    <div className="flex wite-60 justify-center w-40 pa3 ma3">
                    {/* eslint-disable-next-line */}
                        <img src={a} alt="image" width={250} height={50}/>
                        {/* eslint-disable-next-line */}
                        </div>
                </div>
            </div>
        )
    }
}

export default Footer