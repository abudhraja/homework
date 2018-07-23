import React from "react";
import { Input, Button } from "reactstrap";

const SearchBar = props => (
    <div>
        <Input type="text" placeholder="Search for your dream getaway" />
        <br />
        <Button color="success">search</Button>
    </div>
)

export default SearchBar;