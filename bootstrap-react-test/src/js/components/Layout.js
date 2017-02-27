/*jshint esversion: 6 */

import React from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';

export default class Layout extends React.Component{
   
    render(){
        return (
            <div>
                <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
            </div>
        )
    }
}
