package vista;
	
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.Pane;

public class Main extends Application {
	@Override
	public void start(Stage primaryStage) {
		try {
			Image ico = new Image("/img/icono.png");
			AnchorPane root = FXMLLoader.load(getClass().getResource("Vista.fxml"));
			Scene scene = new Scene(root);
			primaryStage.getIcons().add(ico);
			primaryStage.setScene(scene);
			primaryStage.show();
			colocarImg(root);

			//primaryStage.setResizable(false); //Bloquear tamaño de la ventana
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		launch(args);
	}
	public void colocarImg(AnchorPane root) {
		ImageView imagen;
		
		//fondo
		Image ico = new Image("/img/fondo1.jpg");
		imagen = (ImageView)root.getChildren().get(0);
		imagen.setImage(ico);
		
		//imagen cuadro
		ico = new Image("/img/fondo2.jpg");
		imagen = (ImageView)root.getChildren().get(1);
		imagen.setImage(ico);
		
		//imagen logo
		ico = new Image("/img/menu2.png");
		imagen = (ImageView)root.getChildren().get(2);
		imagen.setImage(ico);
		
		
	}
}
