// Copyright 2019 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import React from 'react';
import style from './style.less';
import classNames from 'classnames';
import { IconCheckThin } from '../../icons';

interface IProps {
    title: string;
    description: string;
    onClick: (action: string) => void;
    isActive: boolean;
    disabled: boolean;
    action: string;
}

export class MenuItem extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    onClick: React.MouseEventHandler = (e) => {
        e.preventDefault();
        this.props.onClick(this.props.action);
    }

    render() {
        const { title, description, isActive, disabled, onClick } = this.props;

        return (
            <div onClick={this.onClick} className={classNames([style.title, disabled ? style.disabled : null])}>
                <div className={style.activeContainer}>
                    {isActive &&
                        <IconCheckThin />
                    }
                </div>
                <div>{title}</div>
                <div className={style.description}>{description}</div>
            </div>
        );
    }
}
