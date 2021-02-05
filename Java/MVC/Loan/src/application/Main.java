package application;
	
import javafx.application.Application;
import javafx.stage.Stage;

import vista.LoanPanel;
import modelo.Loan;
import controlador.ControlerLoan;

import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;


public class Main extends Application {
	@Override
	public void start(Stage primaryStage) {
		try {
			LoanPanel root = new LoanPanel();//instancio la vista
			Loan loan = new Loan();
			ControlerLoan controlador = new ControlerLoan(loan,root);
			
			Scene scene = new Scene(root,400,400);
			scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());
			primaryStage.setScene(scene);
			primaryStage.show();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		launch(args);
	}
}
