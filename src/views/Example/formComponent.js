import React from "react";
import Test from "../../components/childComponent";
import SecondChild from "../../components/secondChild";


class Form extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        alert("Submit Success!!!")
        console.log(">>> Check data input:", this.state)
    }



    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text" 
                        value={this.state.lastName} 
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <Test/>
                <SecondChild/>
                
            </>
      )

        
    }
  }
  export default Form;