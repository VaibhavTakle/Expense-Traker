import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./Styles";
import {ExpenseTrackerContext} from '../../../context/context'

const List = () => {
  const classes = useStyles();
  const { deleteTransaction, transactions} = useContext(ExpenseTrackerContext)
   
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transactions) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transactions.id}>
              <ListItem>
                  <ListItemAvatar>
                      <Avatar className={transactions.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                        <MoneyOff/>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={transactions.category} secondary={`Rs ${transactions.amount} - ${transactions.date}`}/>
                  <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label='delete' onClick={()=> deleteTransaction(transactions.id)}>
                          <Delete/>
                      </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
          </Slide>
      ))}
    </MUIList>
  );
};

export default List;
