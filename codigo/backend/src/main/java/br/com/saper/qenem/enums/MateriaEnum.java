package br.com.saper.qenem.enums;

public enum MateriaEnum {
    LINGUAGENS_CODIGOS("Linguagens"),
    CIENCIAS_HUMANAS("Humanas"),
    CIENCIAS_NATUREZA("Natureza"),
    MATEMATICA("Matemática");

    private String nome;

    MateriaEnum(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }
}
