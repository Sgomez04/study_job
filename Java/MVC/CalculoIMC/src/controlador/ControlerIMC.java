package controlador;

import modelo.IMC;
import vista.IMCPanel;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;

public class ControlerIMC {
	IMC imc;
	IMCPanel vista;

	public ControlerIMC(IMC imc, IMCPanel vista) {
		this.imc = imc;
		this.vista = vista;

		vista.getBtCalculate().setOnAction(new CalculateIMC());

	}

	class CalculateIMC implements EventHandler<ActionEvent> {

		@Override
		public void handle(ActionEvent event) {
			// TODO Auto-generated method stub

			double altura = Double.parseDouble(vista.getAltura().getText());
			double peso = Double.parseDouble(vista.getPeso().getText());
			// Update the loan object. (interest, year, loanAmount);

			imc.setAltura(altura);
			imc.setPeso(peso);
			
			String IMCresult = Double.toString(imc.getResult());
			String iMCtext = imc.getText();
			vista.getIMC().setText(IMCresult);
			vista.getIMCtext().setText(iMCtext);
		}

	}

}
