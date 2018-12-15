import * as React from 'react';
export interface PersistProps {
    name: string;
    debounce?: number;
}
export declare const Persist: React.ComponentClass<PersistProps, React.ComponentState> & {
    WrappedComponent: React.ComponentClass<PersistProps & {
        formik: import("formik/dist/types").FormikContext<any>;
    }, React.ComponentState>;
};
