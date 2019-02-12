
export type RevenuTableSelectionItem =
| IRevenueSummaryItem
| ITopTenBacklogItem
| ITopTenOpportunityItem;

export enum BU {
RTI = 'RTI',
SSES = 'SSES'
}

export type BusinessUnitLevel =
| 'RTI'
| 'SSES'
| 'SPHERE'
| 'SCSS'
| 'EHS'
| 'EWD'
| 'FOOD&AG'
| 'GED'
| 'GLOBALHEALTH'
| 'INTLED'
| 'LEED'
| 'DS'
| 'LEED'
| 'IA'
| 'OTHER';

export interface IForcastItem {
fiscalYear: string;
actual: number;
gap: number;
backlog: number;
pipeline: number;
}

export interface IRevenueSummaryItem {
fiscalYear: string;
businessUnit: BusinessUnitLevel;
categoryLabel: string;
actuals: number;
backlog: number;
pipeline: number;
revenue: number;
gap: number;
target: number;
confidenceInterval: number;
predictedTarget: number;
}

export interface ITopTenOpportunityItem {
fiscalYear: string;
opportunityID: string;
name: string;
businessUnit: BusinessUnitLevel;
opportunityAmount: number;
winProbability: number;
bidProbability: number;
forecastAmount: number;
sandboxAmount: number;
sandboxState: boolean | null;
}

export interface ITopTenBacklogItem {
fiscalYear: string[];
projectNumber: number;
name: string;
businessUnit: BusinessUnitLevel;
}
