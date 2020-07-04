import React from 'react';

// High order function for component lists

const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

export default withChildFunction;