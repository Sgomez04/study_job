package modelo;

import java.util.ArrayList;
import java.util.Collections;

public class Memorion {

	private int fails;

	private ArrayList<Carta> fotos;

	public Memorion() {
		fails = 0;
		fotos = new ArrayList<Carta>();

		for (int i = 1; i <= 5; i++) {
			fotos.add(new Carta(i));
			fotos.add(new Carta(i));
		}

		//Collections.shuffle(fotos);

	}

	public boolean comparaF(int f1, int f2) {

		if (f1 == f2)
			return true;
		else {
			fails++;
			return false;
		}
	}

	public int getFails() {
		return fails;
	}

	public ArrayList<Carta> getFotos() {
		return fotos;
	}

}