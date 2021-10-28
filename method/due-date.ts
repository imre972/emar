export interface ResolvedDate {
	submitDate: Date;
	turnAround: number;
	summary: string;
}

export class DueDate {

	constructor(public resolvedDate: ResolvedDate) {}

	CalculateDueDate(submitDate: Date, turnAround: number): ResolvedDate | null {
		if (submitDate === null || submitDate === undefined || turnAround === null || turnAround === undefined) {
			return null;
		}
		if (submitDate.toString().substring(0, 3) === 'Sat' || submitDate.toString().substring(0, 3) === 'Sun') {
			return null;
		}

		if (submitDate.getHours() > 9 && submitDate.getHours() < 17) {

			let calculatedHours: number;
			let calculatedDays: number;
			let calculatedMonths: number;
			let calculatedYears: number;
			let i;
			let difference: number;
			for (i = 0; i <= turnAround; i += 8) {
				difference = i / 8;
			}

			calculatedHours = submitDate.getHours() + turnAround - (difference * 8) < 17 ? submitDate.getHours() + turnAround - (difference * 8) : submitDate.getHours() + turnAround - (difference + 1) * 8;
			calculatedDays = submitDate.getHours() + turnAround - (difference * 8) < 17 ? submitDate.getDate() + difference : submitDate.getDate() + difference + 1;
			calculatedMonths = submitDate.getMonth();
			calculatedYears = submitDate.getFullYear();

			this.resolvedDate = {
				submitDate: submitDate,
				turnAround: turnAround,
				summary: new Date(calculatedYears, calculatedMonths, calculatedDays, calculatedHours, submitDate.getMinutes()).toLocaleString()
			}
			return this.resolvedDate;
		}
		return null;
	}
}
