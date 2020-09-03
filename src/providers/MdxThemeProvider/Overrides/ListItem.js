import React from 'react';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import { styled } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  minWidth: 'auto',
  marginRight: theme.spacing(2),
}));

const ListItem = styled(MuiListItem)(({ theme }) => ({
  ...theme.typography.overline,
  padding: '8px 0',
  lineHeight: 'none',
}));

export default ({ children, ...props }) => (
  <ListItem>
    <ListItemIcon>
      <ArrowRightIcon color='inherit' />
    </ListItemIcon>
    {children}
  </ListItem>
);
