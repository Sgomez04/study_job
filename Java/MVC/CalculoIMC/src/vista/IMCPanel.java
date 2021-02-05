package vista;

import javafx.geometry.Pos;
import javafx.geometry.HPos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;

public class IMCPanel extends GridPane {

	private TextField peso = new TextField();
	private TextField altura = new TextField();
	private TextField IMC = new TextField();
	private TextField IMCtext = new TextField();
	private Button btCalculate = new Button("Calculate");

	public IMCPanel() {
		this.setHgap(5);
		this.setVgap(5);
		this.add(new Label("Peso:"), 0, 2);
		this.add(peso, 1, 2);
		this.add(new Label("Talla:"), 0, 3);
		this.add(altura, 1, 3);
		this.add(new Label("IMC:"), 0, 4);
		this.add(IMC, 1, 4);
		this.add(new Label("IMC text:"), 0, 5);
		this.add(IMCtext, 1, 5);
		this.add(btCalculate, 1, 6);

		// Set properties for UI
		this.setAlignment(Pos.CENTER);
		peso.setAlignment(Pos.BOTTOM_RIGHT);
		altura.setAlignment(Pos.BOTTOM_RIGHT);
		IMC.setAlignment(Pos.BOTTOM_RIGHT);
		IMCtext.setAlignment(Pos.BOTTOM_RIGHT);
		IMC.setEditable(false);
		IMCtext.setEditable(false);
		this.setHalignment(btCalculate, HPos.RIGHT);

	}

	public TextField getPeso() {
		return peso;
	}

	public TextField getAltura() {
		return altura;
	}

	public TextField getIMC() {
		return IMC;
	}
	
	public TextField getIMCtext() {
		return IMCtext;
	}

	public Button getBtCalculate() {
		return btCalculate;
	}

}
