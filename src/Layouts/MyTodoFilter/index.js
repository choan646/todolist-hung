import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export default function MyTodoFilter() {
  const handleChange = (value) => {
    // console.log(value); ok
  };
  return (
    <div className="container">
      <FormControl size="small" variant="outlined" style={{marginLeft:"69%", marginTop:"15px"}}>
        <InputLabel htmlFor="outlined-age-native-simple">Filters</InputLabel>
        <Select
          native
          defaultValue="all"
          onChange={(e) => handleChange(e.target.value)}
          label="Filters"
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="uncomplete">Uncomplete</option>
        </Select>
      </FormControl>
    </div>
  );
}
