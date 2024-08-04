export function calculateExperience(workExpStartDate: Date) {
    const currentDate = new Date();

    let years = currentDate.getFullYear() - workExpStartDate.getFullYear();
    let months = currentDate.getMonth() - workExpStartDate.getMonth();
    let days = currentDate.getDate() - workExpStartDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years,
        months,
        days
    };
}