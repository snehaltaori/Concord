package com.concord.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicController {
    @GetMapping("/public")
    public String getPublic() {
        return "This is a public page";
    }
}
