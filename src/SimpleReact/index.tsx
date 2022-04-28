import ReactDOM from "react-dom";
import React from "react";

const OptionsContext = React.createContext<any>(null);

export default function createExternalRoot (container: HTMLElement) {
    return {
        render(context: any) {
            ReactDOM.render(
                <OptionsContext.Provider value={context.options}>
                    <OptionsContext.Consumer>
                        {(options) => <h2>Hello, {options.entityId}!</h2>}
                    </OptionsContext.Consumer>
                </OptionsContext.Provider>,
                container
            );
        },
        unmount() {
            ReactDOM.unmountComponentAtNode(container);
        }
    }
}