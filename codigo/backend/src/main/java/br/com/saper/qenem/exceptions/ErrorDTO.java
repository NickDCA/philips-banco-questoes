package br.com.saper.qenem.exceptions;

import lombok.*;

import java.time.Instant;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class ErrorDTO {

    private Instant timestamp;
    private Integer status;
    private String error;
    private String message;
    private String path;

}
