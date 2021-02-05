package Vista;
	
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;

public class Main extends Application {
	@Override
	public void start(Stage primaryStage) {
		try {
			Image ico = new Image("/img1/icono_ahorcado.png");
			AnchorPane root = FXMLLoader.load(getClass().getResource("VISTA.fxml"));
			Scene scene = new Scene(root);
			primaryStage.getIcons().add(ico);
			primaryStage.setScene(scene);
			primaryStage.show();
			colocarImg(root);
			
			
			//primaryStage.setResizable(false); Bloquear tamaño de la ventana
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		launch(args);
	}
	
	public void colocarImg(AnchorPane root) {
		//fondo
		Image ico = new Image("/img1/fondo.jpg");
		ImageView fondo = (ImageView)root.getChildren().get(0);
		fondo.setImage(ico);
		
		//imagen ahorcado
		ico = new Image("/img1/ahorcado_0.png");
		Pane paneAhorcado = (Pane)root.getChildren().get(1);
		ImageView imgAhorcado = (ImageView)paneAhorcado.getChildren().get(4);
		imgAhorcado.setImage(ico);
		
	}
}
