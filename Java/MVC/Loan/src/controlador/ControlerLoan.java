package controlador;

import modelo.Loan;
import vista.LoanPanel;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;

public class ControlerLoan {
	Loan loan;
	LoanPanel vista;

	public ControlerLoan(Loan loan, LoanPanel vista) {
		this.loan = loan;
		this.vista = vista;

		vista.getBtCalculate().setOnAction(new CalculateLoanPayment());

	}

	class CalculateLoanPayment implements EventHandler<ActionEvent> {

		@Override
		public void handle(ActionEvent event) {
			// TODO Auto-generated method stub
			// Get values from text fields
			double interest = Double.parseDouble(vista.getTfAnnualInterestRate().getText());
			int year = Integer.parseInt(vista.getTfNumberOfYears().getText());
			double loanAmount = Double.parseDouble(vista.getTfLoanAmount().getText());
			// Update the loan object. (interest, year, loanAmount);

			loan.setAnnualInterestRate(interest);
			loan.setLoanAmount(loanAmount);
			loan.setNumberOfYears(year);

			// Display monthly payment and total payment
			String monthly = String.format("$%.2f", loan.getMonthlyPayment());
			String total = String.format("$%.2f", loan.getTotalPayment());
			vista.getTfMonthlyPayment().setText(monthly);
			vista.getTfTotalPayment().setText(total);
		}

	}

}
