import {
    BusinessUnitLevel,
    IForcastItem,
    RevenuTableSelectionItem,
    BU
} from './state-interfaces';

export interface IDashboardState {
    container: {
        layout?: {
            loading: boolean,
            loaded: boolean,
            error?: any,
            displayMode?: any,
            resize?: boolean | null;
        };
        dashboard?: {
            forecast?: {
                selectedBusinessUnitLevel: BusinessUnitLevel,
                forecastGraphItems: IForcastItem[],
            };
            table?: {
                selectedRevenueTableItem: 'SUMMARY' | 'OPPORTUNITY' | 'BACKLOG';
                revenueTableItem: RevenuTableSelectionItem
            }
        };
    };
}

export const INITIAL_STATE: IDashboardState = {
    container: {
        layout: {
            loaded: false,
            loading: false,
            displayMode: null,
            resize: null
        },
        dashboard: {
            forecast: {
                selectedBusinessUnitLevel: BU.RTI,
                forecastGraphItems: [],
            },
            table: {
                selectedRevenueTableItem: null,
                revenueTableItem: null
            }
        }
    }
};
