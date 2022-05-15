import React from "react";

class MyComponent extends React.Component {

    /*
        JSX => return block
    */
    // key:value
    state = {
        name: "David",
        country: "American"
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
        this.setState({
            country: event.target.value
        })
    }


    render() {
        let name = "Minh Nhi"
        let country = "Long An"

        return(
            <>

                <div className="first">
                    {/* {console.log("My name is ", name)} */}
                    Hello everyone, my name is {name}
                </div>

                <div className="second" >
                    My country is {country}
                </div>

                <div>
                    ****************************************
                </div>

                <div className="first">
                {/* {console.log("My name is ", name)} */}
                    {/* Create input */}
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello everyone, my name is {this.state.name}
                    {/* Hello everyone, my name is {this.state['name']} */}
                </div>

                <div className="second" >
                    <input value={this.state.country} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My country is {this.state.country}
                </div>

                

            </>
        )
    }
}

export default MyComponent;