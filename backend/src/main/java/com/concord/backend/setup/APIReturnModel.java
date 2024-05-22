package com.concord.backend.setup;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Vector;

@Getter
@Setter
@NoArgsConstructor 
@AllArgsConstructor 
public class APIReturnModel {
    private String status = "fail";
    private String message = "Something Went Wrong !!";
    private Vector<?> data;
    private int count = 0; 
}