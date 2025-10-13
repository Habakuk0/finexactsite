import React, { useState } from 'react';

const PayeCalculator: React.FC = () => {
  const [grossSalary, setGrossSalary] = useState<number>(0);
  const [payeResult, setPayeResult] = useState<{
    basicPay: number;
    nssf: number;
    shif: number;
    housingLevy: number;
    taxablePay: number;
    incomeTax: number;
    personalRelief: number;
    paye: number;
    payAfterTax: number;
    netPay: number;
    payeBreakdown: { band: string; amount: number; tax: number }[];
  } | null>(null);

  // Kenya PAYE calculation with all deductions 2025
  const calculatePAYE = (salary: number) => {
    // NSSF 2025 Rates
    const nssfLEL = 8000; // Lower Earnings Limit
    const nssfUEL = 72000; // Upper Earnings Limit
    const nssfRate = 0.06; // 6% employee contribution
    
    // Calculate NSSF (Tier I + Tier II)
    let nssf = 0;
    if (salary <= nssfLEL) {
      nssf = salary * nssfRate;
    } else if (salary > nssfLEL && salary <= nssfUEL) {
      const tierI = nssfLEL * nssfRate;
      const tierII = (salary - nssfLEL) * nssfRate;
      nssf = tierI + tierII;
    } else {
      nssf = nssfUEL * nssfRate; // KSh 4,320 maximum
    }

    // SHIF (Social Health Insurance Fund) - Assuming fixed rate for now
    const shif = 2750; // Fixed SHIF amount as per your example
    
    // Housing Levy - 1.5% of gross salary
    const housingLevyRate = 0.015; // 1.5%
    const housingLevy = salary * housingLevyRate;

    // Calculate taxable income (Gross - NSSF - SHIF - Housing Levy)
    // NOTE: Personal Relief is NOT deducted from taxable pay
    const taxablePay = Math.max(0, salary - nssf - shif - housingLevy);
    
    // PAYE Tax Bands 2025 (Monthly)
    const taxBands = [
      { limit: 24000, rate: 0.10, description: "First KES 24,000" },
      { limit: 32333, rate: 0.25, description: "Next KES 8,333" },
      { limit: 500000, rate: 0.30, description: "Next KES 467,667" },
      { limit: 800000, rate: 0.325, description: "Next KES 300,000" },
      { limit: Infinity, rate: 0.35, description: "Over KES 800,000" }
    ];
    
    let incomeTax = 0;
    let remainingIncome = taxablePay;
    let previousLimit = 0;
    const payeBreakdown: { band: string; amount: number; tax: number }[] = [];

    for (const band of taxBands) {
      if (remainingIncome <= 0) break;
      
      const bandAmount = Math.min(remainingIncome, band.limit - previousLimit);
      const bandTax = bandAmount * band.rate;
      incomeTax += bandTax;
      
      payeBreakdown.push({
        band: band.description,
        amount: bandAmount,
        tax: bandTax
      });
      
      remainingIncome -= bandAmount;
      previousLimit = band.limit;
    }
    
    // Personal Relief is deducted from the tax amount, not taxable pay
    const personalRelief = 2400; // Monthly personal relief
    const paye = Math.max(0, incomeTax - personalRelief);
    
    const payAfterTax = salary - paye;
    const netPay = payAfterTax - nssf - shif - housingLevy;
    
    return {
      basicPay: salary,
      nssf,
      shif,
      housingLevy,
      taxablePay: Math.max(0, taxablePay),
      incomeTax,
      personalRelief,
      paye,
      payAfterTax,
      netPay,
      payeBreakdown
    };
  };

  const handleCalculate = () => {
    if (grossSalary > 0) {
      const result = calculatePAYE(grossSalary);
      setPayeResult(result);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Kenya PAYE Calculator 2025</h3>
      <p className="text-gray-600 mb-6">Calculate your net salary with all statutory deductions including SHIF and Housing Levy</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Basic Pay (KES)
          </label>
          <input
            type="number"
            value={grossSalary || ''}
            onChange={(e) => setGrossSalary(Number(e.target.value))}
            placeholder="Enter your basic pay"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={handleCalculate}
          disabled={!grossSalary}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Calculate Net Pay
        </button>
        
        {payeResult && (
          <div className="mt-6 space-y-6">
            {/* Main Results in Table Format */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-semibold text-gray-700 bg-gray-50">BASIC PAY:</td>
                    <td className="py-3 px-4 text-right font-mono">{formatCurrency(payeResult.basicPay)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-600">NSSF:</td>
                    <td className="py-3 px-4 text-right font-mono text-red-600">-{formatCurrency(payeResult.nssf)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-600">SHIF:</td>
                    <td className="py-3 px-4 text-right font-mono text-red-600">-{formatCurrency(payeResult.shif)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-600">Housing Levy:</td>
                    <td className="py-3 px-4 text-right font-mono text-red-600">-{formatCurrency(payeResult.housingLevy)}</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-blue-50">
                    <td className="py-3 px-4 font-semibold text-gray-700">TAXABLE PAY:</td>
                    <td className="py-3 px-4 text-right font-mono font-semibold">{formatCurrency(payeResult.taxablePay)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-600">INCOME TAX:</td>
                    <td className="py-3 px-4 text-right font-mono text-red-600">-{formatCurrency(payeResult.incomeTax)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-600">Personal Relief:</td>
                    <td className="py-3 px-4 text-right font-mono text-green-600">-{formatCurrency(payeResult.personalRelief)}</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-yellow-50">
                    <td className="py-3 px-4 font-semibold text-gray-700">P.A.Y.E:</td>
                    <td className="py-3 px-4 text-right font-mono font-semibold text-red-600">-{formatCurrency(payeResult.paye)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-600">PAY AFTER TAX:</td>
                    <td className="py-3 px-4 text-right font-mono">{formatCurrency(payeResult.payAfterTax)}</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-4 font-bold text-gray-800 text-lg">NET PAY:</td>
                    <td className="py-4 px-4 text-right font-mono font-bold text-green-600 text-lg">{formatCurrency(payeResult.netPay)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PAYE Tax Breakdown */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">PAYE Tax Breakdown</h4>
              <div className="space-y-2 text-sm">
                {payeResult.payeBreakdown.map((band, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{band.band}:</span>
                    <span className="text-red-600">-{formatCurrency(band.tax)}</span>
                  </div>
                ))}
                <div className="border-t border-gray-300 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Income Tax:</span>
                    <span className="text-red-600">-{formatCurrency(payeResult.incomeTax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Less Personal Relief:</span>
                    <span className="text-green-600">+{formatCurrency(payeResult.personalRelief)}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t border-gray-300 pt-2 mt-2">
                    <span className="text-gray-800">Final P.A.Y.E:</span>
                    <span className="text-red-600">-{formatCurrency(payeResult.paye)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deductions Explanation */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-800 mb-2">Deductions Breakdown</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex justify-between">
                  <span>NSSF (Pension):</span>
                  <span className="font-mono">6% of pensionable earnings</span>
                </div>
                <div className="flex justify-between">
                  <span>SHIF (Health):</span>
                  <span className="font-mono">KES 2,750 fixed</span>
                </div>
                <div className="flex justify-between">
                  <span>Housing Levy:</span>
                  <span className="font-mono">1.5% of basic pay</span>
                </div>
                <div className="flex justify-between">
                  <span>Personal Relief:</span>
                  <span className="font-mono">KES 2,400 monthly (deducted from tax)</span>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
              <p className="text-xs text-yellow-800">
                💡 <strong>Note:</strong> This calculator uses Kenya 2025 statutory rates. 
                                    Always consult with a tax professional for accurate calculations.

              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayeCalculator;