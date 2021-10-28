import DueDate from '../method/due-date';

describe('just testing the DueDate', () => {

    let newProblem;
    let sDate;
    let tAround;

    beforeEach(() => {
        newProblem = new DueDate();
    })

    it('should return null if submit new problem date is undefined and a turnaround time = 8 hours', () => {
        sDate = undefined;
        tAround = 8;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate).toBe(null);
    })

    it('should return null if submit new problem date is defined and a turnaround time is undefined', () => {
        sDate = new Date(2022, 0, 3, 14, 22);
        tAround = undefined;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate).toBe(null);
    })

    it('should return null if submit new problem date is defined and a turnaround time is defined, but on Saturday', () => {
        sDate = new Date(2022, 0, 1, 14, 44);
        tAround = 8;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate).toBe(null);
    })

    it('should return null if submit new problem date is defined and a turnaround time is defined, but on Sunday', () => {
        sDate = new Date(2022, 0, 2, 14, 44);
        tAround = 8;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate).toBe(null);
    })

    it('should return null if submit new problem date is defined and a turnaround time is defined, but the time is earlier than 09 hour', () => {
        sDate = new Date(2022, 0, 3, 7, 44);
        tAround = 8;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate).toBe(null);
    })

    it('should return null if submit new problem date is defined and a turnaround time is defined, but the time is later than 17 hour', () => {
        sDate = new Date(2022, 0, 3, 17, 44);
        tAround = 8;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate).toBe(null);
    })

    it('should return \'2022. 01. 03. 14: 22: 00 \' if submit new problem date = new Date(2022, 0, 3, 14, 22) and a turnaround = 0', () => {
        sDate = new Date(2022, 0, 3, 14, 22);
        tAround = 0;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate.summary).toBe('2022. 01. 03. 14:22:00');
    })

    it('should return \'2022. 01. 03. 15:22:00 \' if submit new problem date = new Date(2022, 0, 3, 14, 22) and a turnaround = 1', () => {
        sDate = new Date(2022, 0, 3, 14, 22);
        tAround = 1;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate.summary).toBe('2022. 01. 03. 15:22:00');
    })

    it('should return \'2022. 01. 04. 9:22:00 \' if submit new problem date = new Date(2022, 0, 3, 14, 22) and a turnaround = 3', () => {
        sDate = new Date(2022, 0, 3, 14, 22);
        tAround = 3;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate.summary).toBe('2022. 01. 04. 9:22:00');
    })

    it('should return \'2022. 01. 04. 14:22:00 \' if submit new problem date = new Date(2022, 0, 3, 14, 22) and a turnaround = 8', () => {
        sDate = new Date(2022, 0, 3, 14, 22);
        tAround = 8;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate.summary).toBe('2022. 01. 04. 14:22:00');
    })

    it('should return \'2022. 01. 04. 16:22:00 \' if submit new problem date = new Date(2022, 0, 3, 14, 22) and a turnaround = 10', () => {
        sDate = new Date(2022, 0, 3, 14, 22);
        tAround = 10;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate.summary).toBe('2022. 01. 04. 16:22:00');
    })

    it('should return \'2022. 01. 05. 9:22:00 \' if submit new problem date = new Date(2022, 0, 3, 14, 22) and a turnaround = 11', () => {
        sDate = new Date(2022, 0, 3, 14, 22);
        tAround = 11;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate.summary).toBe('2022. 01. 05. 9:22:00');
    })

    it('should return \'2022. 01. 06. 9:22:00 \' if submit new problem date = new Date(2022, 0, 3, 14, 22) and a turnaround = 19', () => {
        sDate = new Date(2022, 0, 3, 14, 22);
        tAround = 19;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate.summary).toBe('2022. 01. 06. 9:22:00');
    })

    it('should return \'2022. 01. 27. 12:22:00 \' if submit new problem date = new Date(2022, 0, 3, 14, 22) and a turnaround = 190', () => {
        sDate = new Date(2022, 0, 3, 14, 22);
        tAround = 190;
        newProblem.CalculateDueDate(sDate, tAround);
        expect(newProblem.resolvedDate.summary).toBe('2022. 01. 27. 12:22:00');
    })
})