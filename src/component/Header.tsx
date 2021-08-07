import * as React from 'react';
import { Stack} from '@fluentui/react';
import { Depths } from '@fluentui/react';
import { IconButton } from '@fluentui/react/lib/Button';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import './Header.css'

initializeIcons();

export interface IButtonExampleProps {
    disabled?: boolean;
    checked?: boolean;
}

const itemStyles: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: "auto",
};

const Header : React.FunctionComponent<IButtonExampleProps> = props => {
    const { disabled, checked } = props;

    return (
      <Stack horizontal horizontalAlign="space-between" style={{ boxShadow: Depths.depth16}}>
        <span style={itemStyles}>
        <IconButton
          split
          iconProps={{ iconName: 'GlobalNavButton' }}
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          ariaLabel="New item"
          onClick={_navClicked}
          disabled={disabled}
          checked={checked}
        />
        </span>
        <span style={itemStyles}><h2>냉장고를 부탁해</h2></span>
        <span style={itemStyles}><PrimaryButton text="login" onClick={_loginClicked} allowDisabledFocus disabled={disabled} checked={checked} /></span>
      </Stack>
    );
};

export default Header;

function _navClicked() : void {
  alert('nav clicked')
}

function _loginClicked() : void {
  alert('login clicked')
}