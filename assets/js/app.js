document.addEventListener('DOMContentLoaded', function() {
    // Set default dates
    const today = new Date();
    const friday = new Date(today);
    friday.setDate(today.getDate() + (5 - today.getDay() + 7) % 7);
    
    const weekEl = document.getElementById('weekEnding');
    const payEl = document.getElementById('paymentDate');
    if (weekEl) weekEl.valueAsDate = friday;
    if (payEl) payEl.valueAsDate = friday;

    // Generate payslip button
    const generateBtn = document.getElementById('generateBtn');
    if (generateBtn) generateBtn.addEventListener('click', generatePayslip);
    
    // Reset form button
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) resetBtn.addEventListener('click', resetForm);
    
    // Print button
    const printBtn = document.getElementById('printBtn');
    if (printBtn) printBtn.addEventListener('click', function() {
        window.print();
    });
    
    // New payslip button
    const newPayslipBtn = document.getElementById('newPayslipBtn');
    if (newPayslipBtn) newPayslipBtn.addEventListener('click', resetForm);
    
    function generatePayslip() {
        // Get form values
        const weekEnding = document.getElementById('weekEnding').value;
        const tutorName = document.getElementById('tutorName').value;
        const studentLocation = document.getElementById('studentLocation').value;
        const subjects = document.getElementById('subjects').value;
        const sessionsCompleted = document.getElementById('sessionsCompleted').value;
        const hoursCompleted = document.getElementById('hoursCompleted').value;
        const ratePerHour = parseFloat(document.getElementById('ratePerHour').value) || 0;
        const transportAdvance1 = parseFloat(document.getElementById('transportAdvance1').value) || 0;
        const transportAdvance2 = parseFloat(document.getElementById('transportAdvance2').value) || 0;
        const securityDeposit = parseFloat(document.getElementById('securityDeposit').value) || 0;
        const penalties = parseFloat(document.getElementById('penalties').value) || 0;
        const otherAdjustments = parseFloat(document.getElementById('otherAdjustments').value) || 0;
        const otherAdjustmentsNotes = document.getElementById('otherAdjustmentsNotes').value;
        const paymentStatus = document.getElementById('paymentStatus').value;
        const paymentMethod = document.getElementById('paymentMethod').value;
        const paymentDate = document.getElementById('paymentDate').value;
        const transactionRef = document.getElementById('transactionRef').value;
        
        // Calculate values
        const grossEarnings = ratePerHour * (parseFloat(hoursCompleted) || 0);
        const totalDeductions = transportAdvance1 + transportAdvance2 + securityDeposit + penalties + otherAdjustments;
        const netPay = grossEarnings - totalDeductions;
        
        // Format date
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            if (isNaN(date)) return '____ / ____ / ____';
            return date.toLocaleDateString('en-GB');
        };
        
        // Update preview
        const setText = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        };
        
        setText('previewWeekEnding', formatDate(weekEnding));
        setText('previewTutorName', tutorName || '____________________');
        setText('previewStudentLocation', studentLocation || '____________________');
        setText('previewSubjects', subjects || '____________________');
        setText('previewSessions', sessionsCompleted || '____');
        setText('previewHours', (hoursCompleted || '____') + (hoursCompleted ? ' hrs' : ' hrs'));
        setText('previewRate', ratePerHour.toFixed(2));
        setText('previewTotalHours', hoursCompleted || '____');
        setText('previewGrossEarnings', grossEarnings.toFixed(2));
        setText('previewTransport1', transportAdvance1.toFixed(2));
        setText('previewTransport2', transportAdvance2.toFixed(2));
        setText('previewSecurity', securityDeposit.toFixed(2));
        setText('previewPenalties', penalties.toFixed(2));
        setText('previewOther', otherAdjustments.toFixed(2));
        setText('previewOtherNotes', otherAdjustmentsNotes || '____');
        setText('previewTotalDeductions', totalDeductions.toFixed(2));
        setText('previewGross', grossEarnings.toFixed(2));
        setText('previewDeductions', totalDeductions.toFixed(2));
        setText('previewNetPay', netPay.toFixed(2));
        setText('previewPaymentStatus', paymentStatus);
        setText('previewPaymentMethod', paymentMethod);
        setText('previewPaymentDate', `Friday ${formatDate(paymentDate)}`);
        setText('previewTransactionRef', transactionRef || '____________________');
        setText('previewSignatureDate', formatDate(new Date()));
        
        // Show success message (non-blocking alternative to alert could be used)
        alert('Payslip generated successfully! You can now print or save as PDF.');
    }
    
    function resetForm() {
        const form = document.getElementById('payslipForm');
        if (form) form.reset();
        
        // Reset dates to default
        const today = new Date();
        const friday = new Date(today);
        friday.setDate(today.getDate() + (5 - today.getDay() + 7) % 7);
        
        const weekEl = document.getElementById('weekEnding');
        const payEl = document.getElementById('paymentDate');
        if (weekEl) weekEl.valueAsDate = friday;
        if (payEl) payEl.valueAsDate = friday;
        
        // Reset preview values
        const defaults = {
            previewWeekEnding: '____ / ____ / 2025',
            previewTutorName: '____________________',
            previewStudentLocation: '____________________',
            previewSubjects: '____________________',
            previewSessions: '____',
            previewHours: '____ hrs',
            previewRate: '____',
            previewTotalHours: '____',
            previewGrossEarnings: '____',
            previewTransport1: '____',
            previewTransport2: '____',
            previewSecurity: '____',
            previewPenalties: '____',
            previewOther: '____',
            previewOtherNotes: '____',
            previewTotalDeductions: '____',
            previewGross: '____',
            previewDeductions: '____',
            previewNetPay: '____',
            previewPaymentStatus: 'Pending',
            previewPaymentMethod: 'Airtel Money',
            previewPaymentDate: 'Friday ___ / ___ / 2025',
            previewTransactionRef: '____________________',
            previewSignatureDate: '____ / ____ / 2025'
        };
        Object.keys(defaults).forEach(k => {
            const el = document.getElementById(k);
            if (el) el.textContent = defaults[k];
        });
    }
});
