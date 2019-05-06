// @flow
import * as React from 'react';
import addons from '@storybook/addons';
import LiveEditor from './component/LiveEditor';
import { getOptions } from './options';
import { ADDON_ID, PANEL_ID } from './constants';

type RenderProps = {
    active: boolean
};

addons.register(
    ADDON_ID,
    (api: *): * => {
        addons.addPanel(PANEL_ID, {
            title: 'Live Edit',
            render({ active, key }: RenderProps = { active: true }): ?React.Element<typeof LiveEditor> {
                return <LiveEditor key={key} channel={addons.getChannel()} api={api} theme={getOptions().theme} active={active} />;
            }
        });
    }
);
