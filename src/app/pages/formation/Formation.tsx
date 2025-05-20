import { ChartsWidget1 } from "../../../_metronic/partials/widgets/charts/ChartsWidget1";

function formation() {
    return (
        <>
            <div className="row grid grid-cols-2">
                {/* <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 w-full min-w-0"> */}
                <div className="col-9">
                    <div
                        className="sm:col-span-3 lg:col-span-4 flex flex-col flex-auto p-6 bg-card shadow f-borRadius overflow-hidden">
                        <div className="text-lg font-medium tracking-tight leading-6 truncate">Budget Distribution
                        </div>
                        <div className="flex flex-col flex-auto">
                            {/* <apx-chart className="flex-auto w-full h-80" [chart]="chartBudgetDistribution.chart"
                        [colors]="chartBudgetDistribution.colors"
                        [dataLabels]="chartBudgetDistribution.dataLabels"
                        [markers]="chartBudgetDistribution.markers"
                        [plotOptions]="chartBudgetDistribution.plotOptions"
                        [series]="chartBudgetDistribution.series"
                        [stroke]="chartBudgetDistribution.stroke"
                        [tooltip]="chartBudgetDistribution.tooltip"
                        [xaxis]="chartBudgetDistribution.xaxis"
                                        [yaxis]="chartBudgetDistribution.yaxis"></apx-chart> */}
                            <ChartsWidget1 className="" />
                        </div>
                    </div>
                </div >
                <div className="col-3">
                    <div className="sm:col-span-3 lg:col-span-2 grid grid-cols-1 gap-y-6">
                        <div
                            className="sm:col-span-2 flex flex-col flex-auto p-6 bg-card shadow f-borRadius overflow-hidden">
                            <div className="flex items-start justify-between">
                                <div className="text-lg font-medium tracking-tight leading-6 truncate">Weekly
                                    Expenses</div>
                                <div className="ml-2 -mt-2 -mr-3">
                                    {/* <button mat-icon-button [matMenuTriggerFor]="weeklyExpensesMenu">
                            <mat-icon className="icon-size-5"
                                                    [svgIcon]="'heroicons_solid:dots-vertical'"></mat-icon>
                    </button> */}
                                    {/* <mat-menu #weeklyExpensesMenu="matMenu">
                        <button mat-menu-item>This week</button>
                        <button mat-menu-item>Last week</button>
                        <button mat-menu-item>2 weeks ago</button>
                    </mat-menu> */}
                                </div>
                            </div>
                            <div className="flex items-center mt-1">
                                <div className="flex flex-col">
                                    <div className="text-3xl font-semibold tracking-tight leading-tight">
                                        20.000f F
                                        {/* 20000 F {{ data.weeklyExpenses.amount }} */}
                                    </div>
                                    <div className="flex items-center">
                                        {/* <mat-icon className="mr-1 icon-size-5 text-green-500"
                                                    [svgIcon]="'heroicons_solid:trending-down'"></mat-icon> */}
                                        <div
                                            className="font-medium text-sm text-secondary leading-none whitespace-nowrap">
                                            <span className="text-green-500">2%</span>
                                            below projected
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-auto ml-8">
                                    {/* <apx-chart className="flex-auto w-full h-16" [chart]="chartWeeklyExpenses.chart"
                [colors]="chartWeeklyExpenses.colors"
                [series]="chartWeeklyExpenses.series"
                [stroke]="chartWeeklyExpenses.stroke"
                [tooltip]="chartWeeklyExpenses.tooltip"
                [xaxis]="chartWeeklyExpenses.xaxis"
                                                [yaxis]="chartWeeklyExpenses.yaxis"></apx-chart> */}
                                </div >
                            </div >
                        </div >
                        <div
                            className="sm:col-span-2 flex flex-col flex-auto p-6 bg-card shadow f-borRadius overflow-hidden">
                            <div className="flex items-start justify-between">
                                <div className="text-lg font-medium tracking-tight leading-6 truncate">Monthly
                                    Expenses</div>
                                <div className="ml-2 -mt-2 -mr-3">
                                    {/* <button mat-icon-button [matMenuTriggerFor]="monthlyExpensesMenu">
                    <mat-icon className="icon-size-5"
                                                    [svgIcon]="'heroicons_solid:dots-vertical'"></mat-icon>
            </button>
            <mat-menu #monthlyExpensesMenu="matMenu">
                <button mat-menu-item>This week</button>
                <button mat-menu-item>Last week</button>
                <button mat-menu-item>2 weeks ago</button>
            </mat-menu> */}
                                </div>
                            </div >
                            <div className="flex items-center mt-1">
                                <div className="flex flex-col">
                                    <div className="text-3xl font-semibold tracking-tight leading-tight"> 30.000 F
                                        {/* {{data.monthlyExpenses.amount | currency:'USD'}} */}
                                    </div>
                                    <div className="flex items-center">
                                        {/* <mat-icon className="mr-1 icon-size-5 text-red-500"
                                                    [svgIcon]="'heroicons_solid:trending-up'"></mat-icon> */}
                                        <div
                                            className="font-medium text-sm text-secondary leading-none whitespace-nowrap">
                                            <span className="text-red-500">4%</span>
                                            above projected
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-auto ml-8">
                                    {/* <apx-chart className="flex-auto w-full h-16"
                                                [chart]="chartMonthlyExpenses.chart"
                                                [colors]="chartMonthlyExpenses.colors"
                                                [series]="chartMonthlyExpenses.series"
                                                [stroke]="chartMonthlyExpenses.stroke"
                                                [tooltip]="chartMonthlyExpenses.tooltip"
                                                [xaxis]="chartMonthlyExpenses.xaxis"
                                                [yaxis]="chartMonthlyExpenses.yaxis"></apx-chart> */}
                                </div >
                            </div >
                        </div >
                        <div
                            className="sm:col-span-2 flex flex-col flex-auto p-6 bg-card shadow f-borRadius overflow-hidden">
                            <div className="flex items-start justify-between">
                                <div className="text-lg font-medium tracking-tight leading-6 truncate">Yearly
                                    Expenses</div>
                                <div className="ml-2 -mt-2 -mr-3">
                                    {/* <button mat-icon-button [matMenuTriggerFor]="yearlyExpensesMenu">
                    <mat-icon className="icon-size-5"
                                                    [svgIcon]="'heroicons_solid:dots-vertical'"></mat-icon>
            </button>
            <mat-menu #yearlyExpensesMenu="matMenu">
                <button mat-menu-item>This week</button>
                <button mat-menu-item>Last week</button>
                <button mat-menu-item>2 weeks ago</button>
            </mat-menu> */}
                                </div>
                            </div >
                            <div className="flex items-center mt-1">
                                <div className="flex flex-col">
                                    <div className="text-3xl font-semibold tracking-tight leading-tight">
                                        50.000 F
                                        {/* {{data.yearlyExpenses.amount | currency:'USD'}} */}
                                    </div>
                                    <div className="flex items-center">
                                        {/* <mat-icon className="mr-1 icon-size-5 text-red-500"
                                                    [svgIcon]="'heroicons_solid:trending-up'"></mat-icon> */}
                                        <div
                                            className="font-medium text-sm text-secondary leading-none whitespace-nowrap">
                                            <span className="text-red-500">3%</span>
                                            above projected
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-auto ml-8">
                                    {/* <apx-chart className="flex-auto w-full h-16" [chart]="chartYearlyExpenses.chart"
                                                [colors]="chartYearlyExpenses.colors"
                                                [series]="chartYearlyExpenses.series"
                                                [stroke]="chartYearlyExpenses.stroke"
                                                [tooltip]="chartYearlyExpenses.tooltip"
                                                [xaxis]="chartYearlyExpenses.xaxis"
                                                [yaxis]="chartYearlyExpenses.yaxis"></apx-chart> */}
                                </div >
                            </div >
                        </div >
                    </div >

                </div>
                <div className="row">
<div
                    className=" sm:col-span-6 flex flex-col flex-auto p-6 bg-card shadow f-borRadius overflow-hidden">
                    <div className="text-lg font-medium tracking-tight leading-6 truncate">Budget Details</div>
                    {/* <div className="flex flex-col flex-auto mt-2 overflow-x-auto">
                <table className="min-w-240 overflow-y-visible" mat-table
                                        [dataSource]="data.budgetDetails.rows">

                <ng matColumnDef="type" sticky>
                    <th mat-header-cell *matHeaderCellDef>
                    Type
                </th>
                <td mat-cell *matCellDef="let budget">
                <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full" [ngclassName]="{'bg-blue-500': budget.id === 1,
                    'bg-red-500': budget.id === 2,
                    'bg-green-500': budget.id === 3,
                    'bg-amber-500': budget.id === 4,
                                                                    'bg-indigo-500': budget.id === 5}"></span>
                <span className="ml-3 leading-4">{{ budget.type }}</span>
            </span>
        </td>
                                        </ng - container >
                                        <ng matColumnDef="total">
                                            <th mat-header-cell *matHeaderCellDef>
                                                Total Budget
                                            </th>
                                            <td mat-cell * matCellDef="let budget" >
        <span className="font-medium text-right">
            {{ budget.total | currency:'USD'}}
        </span>
                                            </td >
                                        </ng - container >
                                        <ng-container matColumnDef="expensesAmount">
                                            <th mat-header-cell *matHeaderCellDef>
                                                Expenses (USD)
                                            </th>
                                            <td mat-cell * matCellDef="let budget" >
        {{ budget.expensesAmount | currency: 'USD' }
}
                                            </td >
                                        </ng - container >
                                        <ng-container matColumnDef="expensesPercentage">
                                            <th mat-header-cell *matHeaderCellDef>
                                                Expenses (%)
                                            </th>
                                            <td mat-cell * matCellDef="let budget" >
    {{ budget.expensesPercentage }}%
                                            </td >
                                        </ng - container >
                                        <ng-container matColumnDef="remainingAmount">
                                            <th mat-header-cell *matHeaderCellDef>
                                                Remaining (USD)
                                            </th>
                                            <td mat-cell * matCellDef="let budget" >
    {{ budget.remainingAmount | currency: 'USD' }}
                                            </td >
                                        </ng - container >
                                        <ng-container matColumnDef="remainingPercentage">
                                            <th mat-header-cell *matHeaderCellDef>
                                                Remaining (%)
                                            </th>
                                            <td mat-cell * matCellDef="let budget" >
                                                <span className="flex items-center">
                                                    <span>
                                                        <span
                                                            className="flex items-end w-1 h-4 bg-red-200 rounded overflow-hidden"
                                                            *ngIf="budget.remainingPercentage < 30">
                                                            <span className="flex w-full h-1/3 bg-red-600"></span>
                                                        </span>
                                                        <span
                                                            className="flex items-end w-1 h-4 bg-orange-200 rounded overflow-hidden"
                                                            *ngIf="budget.remainingPercentage >= 30 && budget.remainingPercentage < 80">
                                                            <span className="flex w-full h-2/4 bg-orange-400"></span>
                                                        </span>
                                                        <span
                                                            className="flex items-end w-1 h-4 bg-green-100 rounded overflow-hidden"
                                                            * ngIf="budget.remainingPercentage >= 80" >
    <span className="flex w-full h-full bg-green-400"></span>
                                                        </span >
                                                    </span >
    <span className="ml-3 leading-4">{{ budget.remainingPercentage }}%</span>
                                                </span >
                                            </td >
                                        </ng - container >

    <tr mat-header-row * matHeaderRowDef="data.budgetDetails.columns" ></tr >
        <tr mat-row * matRowDef="let row; columns: data.budgetDetails.columns;" ></tr >
                                    </table >

                                </div > */}
                </div >
                </div>
                
                {/* </div > */}

            </div>
        </>




    );
}
export default formation;