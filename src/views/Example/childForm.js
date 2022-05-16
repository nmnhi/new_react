import React from "react";

class childForm extends React.Component {
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
                <div>
                    child Form
                </div>
                
            </>
      )

        
    }
  }
  export default childForm;