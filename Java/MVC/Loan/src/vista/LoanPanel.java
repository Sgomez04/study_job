package vista;

import javafx.geometry.Pos;
import javafx.geometry.HPos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;

public class LoanPanel extends GridPane {

	private TextField tfAnnualInterestRate = new TextField();
	private TextField tfNumberOfYears = new TextField();
	private TextField tfLoanAmount = new TextField();
	private TextField tfMonthlyPayment = new TextField();
	private TextField tfTotalPayment = new TextField();
	private Button btCalculate = new Button("Calculate");

	public LoanPanel() {
		this.setHgap(5);
		this.setVgap(5);
		this.add(new Label("Annual Interest Rate:"), 0, 0);
		this.add(tfAnnualInterestRate, 1, 0);
		this.add(new Label("Number of Years:"), 0, 1);
		this.add(tfNumberOfYears, 1, 1);
		this.add(new Label("Loan Amount:"), 0, 2);
		this.add(tfLoanAmount, 1, 2);
		this.add(new Label("Monthly Payment:"), 0, 3);
		this.add(tfMonthlyPayment, 1, 3);
		this.add(new Label("Total Payment:"), 0, 4);
		this.add(tfTotalPayment, 1, 4);
		this.add(btCalculate, 1, 5);

		// Set properties for UI
		this.setAlignment(Pos.CENTER);
		tfAnnualInterestRate.setAlignment(Pos.BOTTOM_RIGHT);
		tfNumberOfYears.setAlignment(Pos.BOTTOM_RIGHT);
		tfLoanAmount.setAlignment(Pos.BOTTOM_RIGHT);
		tfMonthlyPayment.setAlignment(Pos.BOTTOM_RIGHT);
		tfTotalPayment.setAlignment(Pos.BOTTOM_RIGHT);
		tfMonthlyPayment.setEditable(false);
		tfTotalPayment.setEditable(false);
		this.setHalignment(btCalculate, HPos.RIGHT);

	}

	public TextField getTfAnnualInterestRate() {
		return tfAnnualInterestRate;
	}

	public TextField getTfNumberOfYears() {
		return tfNumberOfYears;
	}

	public TextField getTfLoanAmount() {
		return tfLoanAmount;
	}

	public TextField getTfMonthlyPayment() {
		return tfMonthlyPayment;
	}

	public TextField getTfTotalPayment() {
		return tfTotalPayment;
	}

	public Button getBtCalculate() {
		return btCalculate;
	}

}
