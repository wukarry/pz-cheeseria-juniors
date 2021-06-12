import styled from 'styled-components';
import {withStyles} from "@material-ui/core/styles";
import {inspect} from "util";
import {IconButton, Typography} from "@material-ui/core";
import MuiDialogContent from "@material-ui/core/DialogContent";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
   a {
     display: flex;
     justify-content: space-between;
     flex-direction: column;   
   }

`;
