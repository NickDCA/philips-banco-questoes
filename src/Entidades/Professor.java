package Entidades;

public class Professor extends Pessoa {
    private boolean certificador;

    public boolean isCertificador() {
        return certificador;
    }

    public void setCertificador(boolean certificador) {
        this.certificador = certificador;
    }
}
