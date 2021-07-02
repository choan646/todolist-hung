import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export default function MyTodoFilter({handleFilter}) {

  
  return (
    <div className="container">
      <FormControl
        size="small"
        variant="outlined"
        style={{ marginLeft: "74%", marginTop: "15px" }}
      >
        <InputLabel htmlFor="outlined-age-native-simple">Filters</InputLabel>
        <Select
          native
          defaultValue="all"
          onChange={(e) => handleFilter(e.target.value)}
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
