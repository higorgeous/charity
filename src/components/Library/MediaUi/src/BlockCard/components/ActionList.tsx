/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import Popup from '@discovr/core.popup';
import { MenuGroup, ButtonItem } from '@discovr/core.menu';
import { ButtonGroup, CustomThemeButton as Button } from '@discovr/core.button';

import { ActionProps, Action } from './Action';
import { gs, mq } from '../utils';

export interface ActionListProps {
  /* An array of action props, which will generate action buttons with the first passed appearing on the left (in LTR reading) */
  items: Array<ActionProps>;
}

export const ActionList = ({ items }: ActionListProps) => {
  const [isOpen, setOpen] = useState(false);

  const actionsToShow = items.slice(0, 2);
  const actionsToList = items.slice(2, items.length);

  return (
    <div css={mq({ display: 'flex', marginTop: [gs(2), 0] })}>
      <ButtonGroup>
        {actionsToShow.map((action) => (
          <Action key={action.id} {...action} />
        ))}
      </ButtonGroup>
      {actionsToList.length ? (
        <div css={{ marginLeft: gs(0.5) }}>
          <Popup
            isOpen={isOpen}
            onClose={() => setOpen(false)}
            content={() => (
              <MenuGroup>
                {actionsToList.map((actionToList) => (
                  <ButtonItem key={actionToList.id}>
                    {actionToList.text}
                  </ButtonItem>
                ))}
              </MenuGroup>
            )}
            trigger={(triggerProps: any) => (
              <Button
                id="popup-trigger"
                {...triggerProps}
                onClick={() => setOpen(!open)}
                spacing="compact"
              >
                ...
              </Button>
            )}
            placement="top-end"
          />
        </div>
      ) : null}
    </div>
  );
};
