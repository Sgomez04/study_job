package modelo;

public class IMC {

private double peso,altura,result;
private String text;

public IMC() {

}

public IMC(Double peso, Double talla) {
	
	this.peso = peso;
	this.altura = talla;
	
}
public void result() {
	
	this.result = this.peso/(this.altura*this.altura);
}

public void IMCtext() {
	
	if(result<16.00){
	  this.text="Infrapeso: Delgadez Severa";
	}else if(result<=16.00 || result<=16.99){
		 this.text="Infrapeso: Delgadez moderada";
	}else if(result<=17.00 ||result<=18.49){
		 this.text="Infrapeso: Delgadez aceptable";
	}else if(result<=18.50 || result<=24.99){
		 this.text="Peso Normal";
	}else if(result<=25.00 || result<=29.99){
		 this.text="Sobrepeso";
	}else if(result<=30.00 || result<=34.99){
		 this.text="Obeso: Tipo I";
	}else if(result<=35.00 || result==40.00){
		 this.text="Obeso: Tipo III";
	}else{
		 this.text="no existe clasificacion";
	}

}

public String getText() {
	return text;
}

public void setText(String text) {
	this.text = text;
}

public double getResult() {
	return result;
}

public void setResult(double result) {
	this.result = result;
}

public double getPeso() {
	return peso;
}

public void setPeso(double peso) {
	this.peso = peso;
}

public double getAltura() {
	return altura;
}

public void setAltura(double talla) {
	this.altura = talla;
}


	
}
