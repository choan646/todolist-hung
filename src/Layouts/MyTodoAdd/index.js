import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { GrAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addTask } from "src/redux/actions/MyToDoActions";

export default function MyTodoAdd() {
  const dispatch = useDispatch()
  //buttonAdd set up
  const [disabled, setDisabled] = useState(true)
  //value input set up
  const [valueInput, setValueInput] = useState("")

  const handleChange =(value) => {
    setValueInput(value)
    if(value != "") {
    setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  }
  const handleAddToDo = (e) => {
    e.preventDefault();
    dispatch(addTask(valueInput))
  }
  useEffect(() => {}, [disabled])
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <Card style={{ marginTop: "30px", width: "700px", marginLeft:"-80px" }}>
            <CardContent className="text-center">
              <h3>Welcome!</h3>
              <p>To get started, add some items to your list:</p>
            </CardContent>
            <CardActions className="justify-content-center">
              {/* Lúc nhập bấm enter từ bàn phím nó submit lên url và không add lên server*/}
              <form noValidate autoComplete="off" >
                <TextField
                  size="small"
                  style={{
                    width: "300px",
                    marginRight: "30px",
                    marginBottom: "30px",
                  }}
                  id="outlined-basic"
                  label="I want to do.."
                  variant="outlined"
                  name="addTask"
                  value={valueInput}
                  onChange={(e)=>handleChange(e.target.value)}
                />
                <Button disabled={disabled} onClick={handleAddToDo} style={{ backgroundColor: "#F4DCD6", height: "40px" }}>
                  <GrAdd style={{ fontSize: "20px" }} />
                </Button>
              </form>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
