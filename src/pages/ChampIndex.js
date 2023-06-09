import React from "react"
import { Card, CardBody, CardTitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const champIndex = ({champ}) => {

  return(
    <div id="champ-index-card">
      {champ?.map((value, index) => {
        return(
          <Card
            style={{
              width: '18rem'
            }}
            key={index}
          >
            <img
              alt={`image of ${value.name} `}
              src={value.image}
            />
            <CardBody>
              <CardTitle tag="h5">
                {value.name}
              </CardTitle>
              <Button>
                <NavLink to={`/champshow/${value.id}`}>
                  Click to View 
                </NavLink>
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default champIndex