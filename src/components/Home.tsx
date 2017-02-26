import * as React from 'react';

interface HomeProps {
    name: string;
}

export class Home extends React.Component<HomeProps, {}> {
    render() {
        return (
            <p>
               React with {this.props.name} works!
            </p>
        );
    }
}