import React from "react";
import Reloader from "../Common/Reloader";

export const lazyComponent = (WrappedComponent, FallbackComponent = null) => {
    return class extends React.Component {
        render() {
            if (!FallbackComponent) FallbackComponent = <Reloader />;
            return (
                <React.Suspense fallback={FallbackComponent}>
                    <WrappedComponent {...this.props} />
                </React.Suspense>
            );
        }
    };
};
