package application;
	
import javafx.application.Application;
import javafx.stage.Stage;

import vista.IMCPanel;
import modelo.IMC;
import controlador.*;

import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;


public class Main extends Application {
	@Override
	public void start(Stage primaryStage) {
		try {
			IMCPanel root = new IMCPanel();
			IMC imc = new IMC();
			ControlerIMC controler = new ControlerIMC(imc,root);
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
